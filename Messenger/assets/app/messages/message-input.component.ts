/**
 * Created by Jazz-Pc on 6/16/2017.
 */
import {Component, OnInit} from "@angular/core";
import {MessageService} from "./message.service";
import {NgForm} from "@angular/forms";
import {Message} from "./message.model";

@Component({
    selector:'message-input',
    templateUrl:'./message-input.component.html'

})

export class MessageInput implements OnInit{
    message:Message;

    constructor(private messageService:MessageService){

    }

OnSubmit(form:NgForm){
      if(this.message){
          debugger;
          this.message.content = form.value.content;
          this.messageService.updateMessage(this.message).subscribe(
                  msg=> console.log(msg),
                  error=>console.error(error)
              );
          this.message=null;
      }
      else {
          const message = new Message(form.value.content, "JAZ");
          this.messageService.addMessage(message).subscribe(
              data => console.log(data),
              error => console.error(error)
          );
      }
         form.resetForm();
}

OnClear(form:NgForm){
        this.message = null;
         form.resetForm();
    }


ngOnInit(){
    this.messageService.editMessage.subscribe(
        (message:Message) => this.message=message
    );
}
}