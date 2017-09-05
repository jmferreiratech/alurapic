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
var core_1 = require("@angular/core");
var photo_component_1 = require("../photo/photo.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var RegisterComponent = (function () {
    function RegisterComponent(http, fb) {
        this.photo = new photo_component_1.PhotoComponent();
        this.http = http;
        this.formGroup = fb.group({
            title: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            url: ['', forms_1.Validators.required],
            description: [''],
        });
    }
    RegisterComponent.prototype.register = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.photo);
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        this.http
            .post("v1/fotos", JSON.stringify({
            titulo: this.photo.title,
            url: this.photo.url,
            descricao: this.photo.description
        }), { headers: headers })
            .subscribe(function () {
            console.log("Photo saved");
            _this.photo = new photo_component_1.PhotoComponent();
        }, function (error) { return console.log(error); });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "register",
            templateUrl: "./register.component.html",
        }), 
        __metadata('design:paramtypes', [http_1.Http, forms_1.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map