import {NgModule} from "@angular/core";
import {MessageComponent} from "./message.component";
import {MessageList} from "./message-list.component";
import {MessageInput} from "./message-input.component";
import {MessagesComponent} from "./messages.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MessageService} from "./message.service";
/**
 * Created by Jazz-Pc on 6/22/2017.
 */

@NgModule({
    declarations:[
        MessageComponent,
        MessageList,
        MessageInput,
        MessagesComponent
    ],

    imports:[
       CommonModule,
        FormsModule
    ],
    providers:[MessageService]

})
export class MessageModule{

}