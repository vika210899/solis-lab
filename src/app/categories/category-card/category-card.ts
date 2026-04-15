import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.html',
  styleUrl: './category-card.scss',
})
export class CategoryCard {
  @Input({ required: true }) category!: Category;
  @Output() select = new EventEmitter();

  onSelectCategory() {
    console.log('Category:' + this.category.name);
    this.select.emit(this.category.id);
  }
}
