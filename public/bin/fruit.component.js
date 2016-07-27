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
var router_1 = require('@angular/router');
var FruitComponent = (function () {
    function FruitComponent(fruitService) {
        this.fruitService = fruitService;
        this.name = '';
        this.FruitName = '';
        this.title = "Fruits Grocery";
        this.fruits = [];
    }
    FruitComponent.prototype.ngOnInit = function () {
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
    FruitComponent.prototype.addFruit = function () {
        var _this = this;
        if (this.name == '') {
            return;
        }
        this.fruitService.addFruit(this.name)
            .then(function (fruit) {
            _this.fruits.push(fruit);
            _this.name = "";
        }, function (error) {
            console.log(error);
        });
    };
    FruitComponent.prototype.deleteFruit = function (id) {
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
    FruitComponent.prototype.showUpdateField = function (fru) {
        var i = this.fruits.indexOf(fru);
        this.fruits[i]["editing"] = true;
        this.FruitName = this.fruits[i].name;
    };
    FruitComponent.prototype.hideUpdateField = function (fru) {
        var i = this.fruits.indexOf(fru);
        delete this.fruits[i]["editing"];
        this.FruitName = '';
    };
    FruitComponent.prototype.updateFruit = function (fru) {
        var _this = this;
        if (this.FruitName == '') {
            return;
        }
        this.fruitService.updateFruit(fru._id, this.FruitName)
            .then(function (fruit) {
            _this.fruits.forEach(function (el) {
                if (fruit._id == el._id) {
                    var index = _this.fruits.indexOf(el);
                    _this.fruits[index].name = _this.FruitName;
                    delete _this.fruits[index]["editing"];
                    _this.FruitName = '';
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    FruitComponent = __decorate([
        core_1.Component({
            selector: 'fruit',
            templateUrl: '../public/templates/main.html',
            styleUrls: ['../public/styles/main.css', '../public/styles/bootstrap/css/bootstrap.css'],
            providers: [FruitService_1.FruitService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [FruitService_1.FruitService])
    ], FruitComponent);
    return FruitComponent;
}());
exports.FruitComponent = FruitComponent;
//# sourceMappingURL=fruit.component.js.map