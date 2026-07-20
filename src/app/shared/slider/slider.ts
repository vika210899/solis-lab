import {
  afterNextRender,
  Component,
  computed,
  effect,
  ElementRef,
  HostListener,
  input,
  OnDestroy,
  signal,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SliderItem } from './slider-item.model';
import { ButtonArrow } from '../button-arrow/button-arrow';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonArrow],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
})
export class SliderComponent implements OnDestroy {
  private readonly SWIPE_THRESHOLD = 50;
  private readonly VERTICAL_THRESHOLD = 30;
  private readonly TRANSITION = 'transform .45s ease';

  @ViewChild('slider') slider?: ElementRef<HTMLElement>;

  readonly slides = input.required<SliderItem[]>();
  readonly autoPlay = input(true);
  readonly intervalTime = input(5000);
  readonly arrows = input(true);

  private intervalId?: ReturnType<typeof setInterval>;

  readonly activeIndex = signal(1);

  readonly isAnimating = signal(false);
  readonly isHovered = signal(false);
  readonly isDragging = signal(false);

  readonly transitionEnabled = signal(true);

  readonly startX = signal(0);
  readonly currentX = signal(0);
  readonly startY = signal(0);

  readonly renderedSlides = computed(() => {
    const slides = this.slides();

    if (slides.length <= 1) {
      return slides;
    }

    return [slides[slides.length - 1], ...slides, slides[0]];
  });

  readonly currentDot = computed(() => {
    const count = this.slides().length;
    const index = this.activeIndex();

    if (count <= 1) {
      return 0;
    }

    if (index === 0) {
      return count - 1;
    }

    if (index === count + 1) {
      return 0;
    }

    return index - 1;
  });

  readonly translate = computed(() => {
    const offset = this.isDragging() ? this.currentX() - this.startX() : 0;

    return `translateX(calc(-${this.activeIndex() * 100}% + ${offset}px))`;
  });

  readonly transition = computed(() => {
    if (this.isDragging()) {
      return 'none';
    }

    return this.transitionEnabled() ? this.TRANSITION : 'none';
  });

  readonly canNavigate = computed(() => this.slides().length > 1);

  readonly canAutoplay = computed(
    () => this.autoPlay() && this.canNavigate() && !this.isHovered() && !this.isDragging(),
  );

  constructor() {
    afterNextRender(() => {
      if (this.autoPlay() && this.canNavigate()) {
        this.startAutoplay();
      }
    });

    effect(() => {
      const count = this.slides().length;

      if (count <= 1) {
        this.activeIndex.set(0);
      }
    });
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  private startAutoplay(): void {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.next();
    }, this.intervalTime());
  }

  private stopAutoplay(): void {
    if (!this.intervalId) {
      return;
    }

    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  private pauseAutoplay(): void {
    this.stopAutoplay();
  }

  private restartAutoplay(): void {
    this.pauseAutoplay();
    this.resumeAutoplay();
  }

  private resumeAutoplay(): void {
    if (!this.autoPlay() || this.slides().length <= 1 || this.isHovered() || this.isDragging()) {
      return;
    }

    this.startAutoplay();
  }

  private disableTransition(): void {
    this.transitionEnabled.set(false);
  }

  private enableTransition(): void {
    this.transitionEnabled.set(true);
  }

  private moveTo(index: number) {
    // плавный переход к слайду, с анимацией
    this.enableTransition();
    this.activeIndex.set(index);
  }

  private jumpTo(index: number) {
    // переход без анимации
    this.disableTransition();
    this.activeIndex.set(index);
  }

  next(): void {
    if (!this.canNavigate() || this.isAnimating()) {
      return;
    }

    this.pauseAutoplay();
    this.isAnimating.set(true);
    this.moveTo(this.activeIndex() + 1);
  }

  prev(): void {
    if (!this.canNavigate() || this.isAnimating()) {
      return;
    }

    this.pauseAutoplay();
    this.isAnimating.set(true);
    this.moveTo(this.activeIndex() - 1);
  }

  goTo(index: number): void {
    if (!this.canNavigate() || this.isAnimating()) {
      return;
    }
    this.pauseAutoplay();
    this.isAnimating.set(true);
    this.moveTo(index + 1);
  }

  onTransitionEnd(event: TransitionEvent): void {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (event.propertyName !== 'transform') {
      return;
    }

    const count = this.slides().length;

    if (this.activeIndex() === count + 1) {
      this.jumpTo(1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.enableTransition();
          this.isAnimating.set(false);
          this.resumeAutoplay();
        });
      });

      return;
    }

    if (this.activeIndex() === 0) {
      this.jumpTo(count);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.enableTransition();
          this.isAnimating.set(false);
          this.resumeAutoplay();
        });
      });

      return;
    }

    this.enableTransition();
    this.isAnimating.set(false);
    this.resumeAutoplay();
  }

  onMouseEnter(): void {
    this.isHovered.set(true);
    this.pauseAutoplay();
  }

  onMouseLeave(): void {
    this.isHovered.set(false);
    this.resumeAutoplay();
  }

  onPointerDown(event: PointerEvent): void {
    this.isDragging.set(true);

    this.startX.set(event.clientX);
    this.currentX.set(event.clientX);
    this.startY.set(event.clientY);

    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);

    this.pauseAutoplay();
  }

  onPointerMove(event: PointerEvent): void {
    if (!this.canNavigate()) {
      return;
    }
    if (!this.isDragging()) {
      return;
    }

    this.currentX.set(event.clientX);
  }

  onPointerUp(event: PointerEvent): void {
    if (!this.canNavigate()) {
      return;
    }
    if (!this.isDragging()) {
      return;
    }

    const deltaX = event.clientX - this.startX();
    const deltaY = event.clientY - this.startY();

    this.isDragging.set(false);

    if (Math.abs(deltaY) <= this.VERTICAL_THRESHOLD || Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > this.SWIPE_THRESHOLD) {
        this.prev();
      }

      if (deltaX < -this.SWIPE_THRESHOLD) {
        this.next();
      }
    }

    this.currentX.set(this.startX());

    (event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);

    this.resumeAutoplay();
  }

  onPointerCancel(event: PointerEvent): void {
    if (!this.canNavigate()) {
      return;
    }
    this.isDragging.set(false);

    this.currentX.set(this.startX());

    (event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);

    this.resumeAutoplay();
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.slider?.nativeElement.checkVisibility()) {
      return;
    }
    if (!this.canNavigate()) {
      return;
    }
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.prev();
        break;

      case 'ArrowRight':
        event.preventDefault();
        this.next();
        break;
    }
  }
}
