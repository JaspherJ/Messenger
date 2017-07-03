import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SignInComponent} from "./signin.component";
import {SignUpComponent} from "./signup.component";
import {LogoutComponent} from "./logout.component";
import {Authentication} from "./authentication.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {authRouting} from "./auth.routing";
/**
 * Created by Jazz-Pc on 6/22/2017.
 */
@NgModule({
    declarations:[
        SignInComponent,
        SignUpComponent,
        LogoutComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        authRouting
    ],
    providers:[]

})
export class AuthModule{

}