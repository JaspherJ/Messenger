/**
 * Created by Jazz-Pc on 6/18/2017.
 */
import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup,  Validators} from "@angular/forms";
import {User} from "./user.model";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    selector:'sign-in',
    templateUrl:'./signin.component.html'
})

export class SignInComponent implements OnInit{
    myForm:FormGroup;
    constructor(private authservice:AuthService,private router:Router){}
    ngOnInit(){
        this.myForm = new FormGroup({
            email : new FormControl(null,Validators.required),
            pwd : new FormControl(null,Validators.required)
        })
    }
    onSubmit(){
        const user = new User(
             this.myForm.value.email,
            this.myForm.value.pwd
        );
        this.authservice.signIn(user).subscribe(
            data =>{
                localStorage.setItem('token',data.token);
                localStorage.setItem('userId',data.userId);
                this.router.navigateByUrl('/');
                console.log(data);
            },
            err =>console.error(err)

        )

        this.myForm.reset();

    }
}