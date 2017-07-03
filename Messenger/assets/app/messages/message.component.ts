/**
 * Created by Jazz-Pc on 6/13/2017.
 */

import {Component,Input} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";
@Component({

    selector:  'message-com',
    templateUrl:'./message.component.html',
    styles: [`
    .author {
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
    }
        .config{
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    
    
    `]
})
export class MessageComponent{
    @Input() message : Message;

    constructor(private _messageService:MessageService){}
    onEdit(){
         this._messageService.onEditMessages(this.message)
    }
    onDelete(){
        this._messageService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }

    onPrivilegeUser(){
        return localStorage.getItem('userId')==this.message.userId;
}
}
