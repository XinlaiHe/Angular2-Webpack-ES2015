import { Component, OnInit } from '@angular/core';
import {Fruit} from './Fruit';
import {FruitService} from './FruitService';

@Component({

  selector: 'my-app',
  templateUrl:'../public/templates/main.html',
  styleUrls: ['../public/styles/main.css', '../public/styles/bootstrap/css/bootstrap.css'],
  providers: [FruitService]

})

export class AppComponent implements OnInit {

  title: string;
  fruits: Array<Fruit>;
  name: string = '';

  constructor(private fruitService: FruitService ) {
    this.title = "Fruits Grocery";
    this.fruits = [];
  }

  ngOnInit() {
    this.fruitService.getFruits()
     .then(
      list => {
        //console.log(1);
        this.fruits = list;

      },
      error => {
        //console.log(2);
        console.log(error);
      }
     );
  }
  addFruit() {

    this.fruitService.addFruit(this.name)
    .then(
        fruit => {
          this.fruits.push(fruit);
          this.name = "";
        },
        error => {
          console.log(error);
        }
      );
  }
  deleteFruit(id : string) {

    this.fruitService.deleteFruit(id)
    .then(
        fruit => {
          this.fruits.forEach((el) => {
              if(fruit._id == el._id){
                let index = this.fruits.indexOf(el);
                this.fruits.splice(index, 1);
              }
          })
        },
        error => {
          console.log(error);
        }
      );
  }
}