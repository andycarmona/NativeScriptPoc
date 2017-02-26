import { LoginComponent } from "./views/login/login.component";
import { ListComponent } from "./views/list/list.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "list", component: ListComponent }
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent
];
