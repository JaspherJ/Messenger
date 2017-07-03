import {EventEmitter, Injectable} from "@angular/core";
import {Message} from "./message.model";
import {Http,Response,Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {ErrorService} from "../error/error.service";


/**
 * Created by Jazz-Pc on 6/17/2017.
 */
@Injectable()
export class MessageService{

private messages:Message[]=[];
editMessage= new EventEmitter<Message>();



constructor(private http:Http,private errorService:ErrorService){}

addMessage(message:Message){
   const body = JSON.stringify(message);
   const headers = new Headers({'Content-Type':'application/json'});
   const token =localStorage.getItem('token')? '?token=' + localStorage.getItem('token'):'';
   return this.http.post("http://localhost:3000/message" + token,body,{headers:headers})
       .map((res: Response) =>{
       const result= res.json();
       const message= new Message(result.obj.content,result.obj.user.firstName,result.obj._id,result.obj.user._id);
       this.messages.push(message);
       return message;

   })
       .catch((err:Response)=> {
       this.errorService.handleError(err.json());
       return Observable.throw(err.json());
       });

}
getMessage(){
    return this.http.get("http://localhost:3000/message")
        .map((response:Response)=>{
        const messages=response.json().obj;
        let transformedMessages: Message[]=[];
        for(let message of messages){
            transformedMessages.push(new Message(message.content,message.user.firstName,message._id,message.user._id));
        }
        this.messages= transformedMessages;
        return transformedMessages;
        })
        .catch((err:Response)=> {
            this.errorService.handleError(err.json());
            return Observable.throw(err.json());
        });
}
onEditMessages(message:Message){
    this.editMessage.emit(message);
}
spotifyService(){
    return this.http.get()

}
updateMessage(message:Message){
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type':'application/json'});
    const token =localStorage.getItem('token')? '?token=' + localStorage.getItem('token'):'';
    return this.http.patch("http://localhost:3000/message/"+ message.messageId + token,body,{headers:headers})
        .map((res: Response) => res.json())
        .catch((err:Response)=> {
            this.errorService.handleError(err.json());
            return Observable.throw(err.json());
        });
}

deleteMessage(message:Message){
    this.messages.splice(this.messages.indexOf(message),1);
    const token =localStorage.getItem('token')? '?token=' + localStorage.getItem('token'):'';
    return this.http.delete("http://localhost:3000/message/"+ message.messageId+token)
        .map((res: Response) => res.json())
        .catch((err:Response)=> {
            this.errorService.handleError(err.json());
            return Observable.throw(err.json());
        });
}

}