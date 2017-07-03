import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup,  Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {User} from "./user.model";
/**
 * Created by Jazz-Pc on 6/18/2017.
 */

@Component({
    selector:'sign-up',
    templateUrl:'./signup.component.html'
})
export class SignUpComponent implements OnInit{
      myForm:FormGroup;
      constructor(private authService:AuthService){

      }
      ngOnInit(){
          this.myForm = new FormGroup({
                firstName : new FormControl(null,Validators.required),
                 lastName : new FormControl(null,Validators.required),
                 email : new FormControl(null,Validators.required),
                 pwd : new FormControl(null,Validators.required)
          })
      }
onSubmit(){
          const user = new User(this.myForm.value.email,
              this.myForm.value.pwd,
              this.myForm.value.firstName,
              this.myForm.value.lastName);
          this.authService.signUp(user).subscribe(
              res =>console.log(res),
              error=>console.error(error));
          this.myForm.reset();

}
}