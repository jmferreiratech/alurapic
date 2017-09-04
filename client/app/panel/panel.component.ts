import {Component, Input} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "panel",
    templateUrl: "./panel.component.html",
})
export class PanelComponent {
    @Input() title;
}
