import {MessagesComponent} from "./messages/messages.component";
import {Authentication} from "./auth/authentication.component";
import {RouterModule} from "@angular/router";
import {AuthModule} from "./auth/auth.module"
/**
 * Created by Jazz-Pc on 6/18/2017.
 */

const APP_ROUTES = [
    {path:'',redirectTo:'/messages',pathMatch:'full'},
    {path:'messages',component:MessagesComponent},
    {path:'auth',component:Authentication, loadChildren:'./auth/auth.module#AuthModule'}

];

export const Routes=RouterModule.forRoot(APP_ROUTES);