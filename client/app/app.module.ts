import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {RegisterComponent} from "./register/register.component";
import {ListComponent} from "./list/list.component";
import {PhotoModule} from "./photo/photo.module";
import {PanelModule} from "./panel/panel.module";
import "rxjs/add/operator/map";
import {routing} from "./app.routes";

@NgModule({
    imports: [BrowserModule, PhotoModule, HttpModule, PanelModule, routing],
    declarations: [AppComponent, RegisterComponent, ListComponent],
    bootstrap: [AppComponent],
})
export class AppModule {
}
