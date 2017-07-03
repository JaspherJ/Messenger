import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Message} from "../messages/message.model";
import {AuthService} from "./auth.service";
/**
 * Created by Jazz-Pc on 6/17/2017.
 */


@Component({
    selector:'auth',
    template:`
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active"><a routerLink="signup">SignUp</a></li>
                    <li routerLinkActive="active" *ngIf="!isLogged()"><a routerLink="signin">SignIn</a></li>
                    <li routerLinkActive="active" *ngIf="isLogged()"><a routerLink="logout">Logout</a></li>
                </ul>
            </nav>
        </header>
        <div class="row spacing"><router-outlet></router-outlet></div>
    `
})
export class Authentication {

    constructor(private authService:AuthService){}

    isLogged(){
        return this.authService.isLoggedIn();
    }

}