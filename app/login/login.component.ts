import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formdata = {email:"",password:""};
  submitted=false;
  loading=false;
  errorMessage="";
  loginForm:FormGroup;
  formBuilder: any;
  // constructor() { }
  constructor(
    private auth:AuthService,
    private loginService:LoginService,
    private formbuilder:FormBuilder,
    private router: Router){}

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:new FormControl('',[]),
      password:new FormControl('',[])
    })
  }
  save(){
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;

    }
    this.loginService.login(this.loginForm.value).subscribe((data: any) => {
        console.log(data );
        alert(data)
      })
     
   
}
}
