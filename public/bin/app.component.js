"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FruitService_1 = require('./FruitService');
var AppComponent = (function () {
    function AppComponent(fruitService) {
        this.fruitService = fruitService;
        this.name = '';
        this.title = "Fruits Grocery";
        this.fruits = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fruitService.getFruits()
            .then(function (list) {
            //console.log(1);
            _this.fruits = list;
        }, function (error) {
            //console.log(2);
            console.log(error);
        });
    };
    AppComponent.prototype.addFruit = function () {
        var _this = this;
        this.fruitService.addFruit(this.name)
            .then(function (fruit) {
            _this.fruits.push(fruit);
            _this.name = "";
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.deleteFruit = function (id) {
        var _this = this;
        this.fruitService.deleteFruit(id)
            .then(function (fruit) {
            _this.fruits.forEach(function (el) {
                if (fruit._id == el._id) {
                    var index = _this.fruits.indexOf(el);
                    _this.fruits.splice(index, 1);
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../public/templates/main.html',
            styleUrls: ['../public/styles/main.css', '../public/styles/bootstrap/css/bootstrap.css'],
            providers: [FruitService_1.FruitService]
        }), 
        __metadata('design:paramtypes', [FruitService_1.FruitService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map