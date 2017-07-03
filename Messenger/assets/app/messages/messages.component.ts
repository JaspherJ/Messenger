import {Component} from "@angular/core";
/**
 * Created by Jazz-Pc on 6/17/2017.
 */
@Component({
    selector:'messages',
    template:`
        <div class="row">
            <message-input></message-input>
        </div>
        <hr>
        <div class="row">
            <message-list></message-list>
        </div>
    `

})

export class MessagesComponent{

}