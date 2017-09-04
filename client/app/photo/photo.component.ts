import {Component, Input} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "photo",
    templateUrl: "./photo.component.html",
})
export class PhotoComponent {

    @Input() title: string;
    @Input() url: string;
    description: string;
}
