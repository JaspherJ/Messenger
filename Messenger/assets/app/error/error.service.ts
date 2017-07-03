import {EventEmitter} from "@angular/core";
import {Error} from "./error.model";

export class ErrorService{
errorComes= new EventEmitter<Error>();

handleError(error:Error){
    debugger;
    const errorData = new Error(error.title,error.error.message);
    this.errorComes.emit(errorData);
}
}