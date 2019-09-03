import { Component, OnInit } from '@angular/core';  
import { FormGroup, Validators, FormControl } from '@angular/forms';  
import { ManagerDetail } from '../classes/manager-detail';  
import { ManagerService } from '../services/manager.service'; 

import { Router } from '@angular/router';  

  import { from } from 'rxjs';
@Component({  
  selector: 'app-login', 
  
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']  
})  
export class LoginComponent implements OnInit {  
  
  private managerDetail = new ManagerDetail(); 

    
  constructor(private managerService : ManagerService, private router : Router) { }  
  
  ngOnInit() {  
    if((this.managerService.isLoggedIn()) )  
    {  
        this.router.navigate(['/profile' , localStorage.getItem('id')]);  
    }  
    else  
    {  
        this.router.navigate(['/login']);  
    }  
  }  
  
  // create the form object.  
  form = new FormGroup({  
    email : new FormControl('' , Validators.required),  
    password : new FormControl('' , Validators.required)  
  }); 
  

  
  Login(LoginInformation)  
  {  
      this.managerDetail.email = this.Email.value;  
      this.managerDetail.password = this.Password.value;  
  
      this.managerService.login(this.managerDetail).subscribe(  
        response => {  
            let result =  response.json();  
              
            if(result > 0)  
            {  
              let token = response.headers.get("Authorization");  
  
              localStorage.setItem("token" , token);  
              localStorage.setItem("id" , result);  
              
              this.router.navigate(['/profile', result]); 
              
            }  
            if(result == -1)  
            {  
              alert("please register before login Or Invalid combination of Email and password");  
            }  
             
        },  
        error => {  
            console.log("Error in authentication");  
        }  
      );  
  }  

  
  get Email(){  
      return this.form.get('email');  
  }  
  
  get Password(){  
      return this.form.get('password');  
  }  
  
}  
