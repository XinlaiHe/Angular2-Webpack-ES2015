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

  constructor(private fruitSerive: FruitService ) {
    this.title = "Fruits Grocery";
    this.fruits = [];
  }

  ngOnInit() {
    this.fruitSerive.getFruits()
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

}