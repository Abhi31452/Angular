import { Component } from '@angular/core';
import { FoodItem } from '../customclasses/food-item';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css'
})
export class FoodItemComponent {

  food_item: FoodItem = new FoodItem();

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Product added :', this.food_item);
      alert('Product added successfully!');
      form.resetForm(); // Optionally reset the form
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
