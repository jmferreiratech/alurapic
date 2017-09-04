import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "filterByTitle",
})
export class FilterByTitle implements PipeTransform {
    transform(photos = [], filterText = "") {
        return photos
            .filter(p => p.titulo.toLowerCase().includes(filterText.toLowerCase()));
    }
}
