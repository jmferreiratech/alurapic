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
var FilterByTitle = (function () {
    function FilterByTitle() {
    }
    FilterByTitle.prototype.transform = function (photos, filterText) {
        if (photos === void 0) { photos = []; }
        if (filterText === void 0) { filterText = ""; }
        return photos
            .filter(function (p) { return p.titulo && p.titulo.toLowerCase().includes(filterText.toLowerCase()); });
    };
    FilterByTitle = __decorate([
        core_1.Pipe({
            name: "filterByTitle",
        }), 
        __metadata('design:paramtypes', [])
    ], FilterByTitle);
    return FilterByTitle;
}());
exports.FilterByTitle = FilterByTitle;
//# sourceMappingURL=photo.pipes.js.map