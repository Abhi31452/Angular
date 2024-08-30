import { Component, Input } from '@angular/core';
import { FoodItemCrudService } from '../customsServices/crud/food-item-crud.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  constructor(public fooditem:FoodItemCrudService){

  }
  
  foodItems = [
   {
     imagePath: "Images/Chicken-soup.jpeg",
     name: "Chicken Soup",
     description: "Hearty chicken soup with fresh ingredients.",
     price: 200.232,
     rating: 4
   },
   {
     imagePath: "Images/chickenspringroll.jpeg",
     name: "Chicken Spring Roll",
     description: "Crispy spring rolls with chicken and vegetables.",
     price: 190.23,
     rating: 3
   },
   {
     imagePath: "Images/chineseHamburge.jpeg",
     name: "Chinese Hamburger",
     description: "Juicy Chinese-style hamburger with a flavorful patty.",
     price: 223.232,
     rating: 4
   },
   {
     imagePath: "Images/dumpling.jpeg",
     name: "Juicy Dumpling",
     description: "Hand-made dumplings filled with juicy pork and vegetables, steamed to perfection.",
     price: 200.232,
     rating: 4.0
   },
   {
     imagePath: "Images/EggRice.jpeg",
     name: "Egg Rice",
     description: "Egg rice with a mix of vegetables and meat.",
     price: 140.544,
     rating: 2
   },
   {
     imagePath: "Images/Fried rice.jpeg",
     name: "Fried Rice",
     description: "Hearty fried rice with fresh ingredients.",
     price: 290.10,
     rating: 3
   },
   {
     imagePath: "./Images/Hot Pot.jpeg",
     name: "Hot Pot",
     description: "Hot pot with a variety of meats and vegetables.",
     price: 300.232,
     rating: 4
   },
   {
     imagePath: "Images/Kung Pao Chicken.jpeg",
     name: "Kung Pao Chicken",
     description: "Spicy Kung Pao chicken with peanuts and vegetables.",
     price: 455.232,
     rating: 5
   },
   {
     imagePath: "Images/noodles.jpeg",
     name: "Noodles",
     description: "Enjoy our authentic Chinese noodles with a variety of fresh vegetables and savory sauces.",
     price: 200.232,
     rating: 3
   },
   {
     imagePath: "Images/Steamed Pork Buns.jpeg",
     name: "Steamed Pork Buns",
     description: "Soft steamed buns filled with savory pork.",
     price: 533.232,
     rating: 4 
   },
   {
     imagePath: "Images/TripleNoodles.jpeg",
     name: "Triple Noodles",
     description: "Noodles with a triple mix of vegetables and meat.",
     price: 345.98,
     rating: 2
   },
   {
     imagePath: "Images/veg_springroll.jpeg",
     name: "Veg Spring Roll",
     description: "Crispy spring rolls with vegetables.",
     price: 343.434,
     rating: 5
   }
 ];


}
