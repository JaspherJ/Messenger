import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from "./app.component";
import {MessageService} from "./messages/message.service";

import {HeaderComponent} from "./header.component";
import {Routes} from "./app.routing";

import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {ErrorHandling} from "./error/error.component";
import {ErrorService} from "./error/error.service";
import {MessageModule} from "./messages/message.module";
import {Authentication} from "./auth/authentication.component";

@NgModule({
    declarations: [
        AppComponent,
        Authentication,
        HeaderComponent,
        ErrorHandling
    ],
    imports: [BrowserModule,Routes,HttpModule,MessageModule],
    bootstrap: [AppComponent],
    providers:[MessageService,AuthService,ErrorService]
})
export class AppModule {

}