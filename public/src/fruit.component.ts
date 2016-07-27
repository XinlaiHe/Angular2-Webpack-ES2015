import { Component, OnInit } from '@angular/core';
import {Fruit} from './Fruit';
import {FruitService} from './FruitService';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AnotherComponent } from './another.component';

@Component({

  selector: 'fruit',
  templateUrl:'../public/templates/main.html',
  styleUrls: ['../public/styles/main.css', '../public/styles/bootstrap/css/bootstrap.css'],
  providers: [FruitService],
  directives: [ROUTER_DIRECTIVES]

})

export class FruitComponent implements OnInit {

  title: string;
  fruits: Array<Fruit>;
  name: string = '';
  FruitName: string = '';

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
    if (this.name == '') {
      return;
    }
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

  showUpdateField(fru: Fruit){

    let i = this.fruits.indexOf(fru);
    this.fruits[i]["editing"] = true;
    this.FruitName = this.fruits[i].name;
  }

  hideUpdateField(fru: Fruit){

    let i = this.fruits.indexOf(fru);
    delete this.fruits[i]["editing"];
    this.FruitName = '';

  }

  updateFruit(fru: Fruit){
    if (this.FruitName == '') {
      return;
    }
    this.fruitService.updateFruit(fru._id, this.FruitName)
      .then(
            fruit => {
              this.fruits.forEach((el) => {
                if (fruit._id == el._id) {
                  let index = this.fruits.indexOf(el);
                  this.fruits[index].name = this.FruitName;
                  delete this.fruits[index]["editing"];
                  this.FruitName = '';
                }
              })
            },
      error => {
        console.log(error);
      }
      );
  }
}



