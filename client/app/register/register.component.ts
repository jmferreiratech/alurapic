import {Component} from "@angular/core";
import {PhotoComponent} from "../photo/photo.component";
import {Http, Headers} from "@angular/http";

@Component({
    moduleId: module.id,
    selector: "register",
    templateUrl: "./register.component.html",
})
export class RegisterComponent {

    photo: PhotoComponent = new PhotoComponent();
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    register(event) {
        event.preventDefault();
        console.log(this.photo);
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        this.http
            .post("v1/fotos", JSON.stringify({titulo: this.photo.title, url: this.photo.url, descricao: this.photo.description}), {headers})
            .subscribe(() => {
                console.log("Photo saved");
                this.photo = new PhotoComponent();
            }, error => console.log(error));
    }
}
