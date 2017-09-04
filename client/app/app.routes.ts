import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./list/list.component";
import {RegisterComponent} from "./register/register.component";

const appRoutes: Routes = [
    {path: "", component: ListComponent},
    {path: "form", component: RegisterComponent},
    {path: '**', redirectTo: ''},
];

export const routing = RouterModule.forRoot(appRoutes);
