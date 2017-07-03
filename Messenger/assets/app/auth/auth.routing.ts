import {SignInComponent} from "./signin.component";
import {SignUpComponent} from "./signup.component";
import {LogoutComponent} from "./logout.component";
import {RouterModule} from "@angular/router";
/**
 * Created by Jazz-Pc on 6/18/2017.
 */
 const AUTH_ROUTES=[
    {path:'signup',component: SignUpComponent},
    {path:'signin',component:SignInComponent},
    {path:'logout',component:LogoutComponent},
    {path:'',redirectTo:'signup',pathMatch:'full'}

]

export const authRouting =RouterModule.forChild(AUTH_ROUTES);