

import {Component,OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";


@Component({
    selector:'message-list',
    templateUrl:`
    <div class="col-md-8 col-md-offset-2" >
    <message-com [message]="message"  *ngFor="let message of message"></message-com>
    
</div>`

})
export class MessageList implements OnInit{
    constructor(private _messageService:MessageService){}
       message:Message[];


    ngOnInit(){
        this._messageService.getMessage().subscribe(
            (messages:Message[]) =>{
            this.message= messages;
            })

    }

}