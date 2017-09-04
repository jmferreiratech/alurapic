import {NgModule} from "@angular/core";
import {PhotoComponent} from "./photo.component";
import {FilterByTitle} from "./photo.pipes";

@NgModule({
    declarations: [PhotoComponent, FilterByTitle],
    exports: [PhotoComponent, FilterByTitle],
})
export class PhotoModule {}
