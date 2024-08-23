import { Component, OnInit } from '@angular/core';
// import { FoodItem } from '../customclasses/food-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit { 
  //  ImagePath = "."; 
  ngOnInit() { 
  }  

  constructor(){
    // this.getfoodItem();
    //  this.ImagePath = 'home/neosoft/Angular/miniProject/src/app/header/Images/chickenspringroll.jpeg'
  }

  // foodItem : FoodItem[]=[];
  // getfoodItem(){
  //   this.foodItem=[
  //     new FoodItem( "./Images/","Chicken Soup" ," Hearty chicken soup with fresh ingredients." ,200.232,4.5),
  //     new FoodItem( "./Images/","chicken spring roll" ," Crispy spring rolls with chicken and vegetables." ,190.23,3.5),
  //     new FoodItem( "./Images/","chinese Hamburge" ," Juicy Chinese-style hamburger with a flavorful patty." ,223.232,4.5),
  //     new FoodItem( "./Images/","Juicy dumpling" ," Hand-made dumplings filled with juicy pork and vegetables, steamed to perfection." ,200.232,4.0),
  //     new FoodItem( "./Images/","Egg Rice" ," Egg rice with a mix of vegetables and meat." ,140.544,3.5),
  //     new FoodItem( "./Images/","Fried rice" ," Hearty chicken soup with fresh ingredients." ,290.10,3.0),
  //     new FoodItem( "./Images/","Hot Pot" ,"Hot pot with a variety of meats and vegetables." ,300.232,4.0),
  //     new FoodItem( "./Images/"," Kung Pao Chicken" ," Spicy Kung Pao chicken with peanuts and vegetables." ,455.232,5.0),
  //     new FoodItem( "./Images/","Noodles" ," Enjoy our authentic Chinese noodles with a variety of fresh vegetables and savory sauces." ,200.232,3.5),
  //     new FoodItem( "./Images/","Steamed Pork Buns" ," Soft steamed buns filled with savory pork." ,533.232,4.5),
  //     new FoodItem( "./Images/","Triple Noodles" ," Noodles with a triple mix of vegetables and meat." ,345.98 ,2),
  //     new FoodItem( "./Images/","veg spring roll" ," Hearty chicken soup with fresh ingredients." ,343.434,5.0),
  //   ]
  
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
  
