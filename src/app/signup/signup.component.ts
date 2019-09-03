import { Component, OnInit } from '@angular/core';  
import { FormGroup, FormControl, Validators } from '@angular/forms';  
import { ManagerDetail } from '../classes/manager-detail';  
import { ManagerService } from '../services/manager.service';  
import { Router } from '@angular/router';  
  
@Component({  
  selector: 'app-signup',  
  templateUrl: './signup.component.html',  
  styleUrls: ['./signup.component.css']  
})  
export class SignupComponent implements OnInit {  
  
  private managerDetail = new ManagerDetail();  
  
  constructor(private managerService : ManagerService, private router : Router) { }  
  
  ngOnInit() {  
  }  
  
  // create the form object.  
  form = new FormGroup({  
    email : new FormControl('' , Validators.required),  
    firstName : new FormControl('' , Validators.required),  
    lastName : new FormControl('' , Validators.required),  
    password : new FormControl('' , Validators.required),  
    address : new FormControl('' , Validators.required),  
      dob : new FormControl('' , Validators.required),  
      company : new FormControl('' , Validators.required),  
  });  
  
  AdminForm(AdminInformation)  
  {  
     let pass = this.password.value;  
     let confirmPass = this.password.value;  
  
     if(pass == confirmPass)  
     {  
        this.managerDetail.email = this.email.value;  
        this.managerDetail.firstName = this.firstName.value;  
        this.managerDetail.lastName = this.lastName.value;  
        this.managerDetail.password = this.password.value;  
        this.managerDetail.address = this.address.value; 
        this.managerDetail.dob = this.dob.value; 
        this.managerDetail.company = this.company.value; 
  
        this.managerService.saveManagerDetails(this.managerDetail).subscribe(  
          response => {  
              let result = response.json();  
  
              if(result > 0)  
              {  
                this.router.navigate(['/login']);  
              }  
              else  
              {  
                  alert("error occur while registring User. please try after sometime.")  
              }  
          },  
          error => {  
            alert("error occur while registring User. please try after sometime.")  
          }  
        );  
          
     }  
     else  
     {  
        alert("Password and confirm password not match.");  
     }  
  }  
  
  get email(){  
    return this.form.get('email');  
  }  
  
  get firstName(){  
      return this.form.get('firstName');  
  }  
  
  get lastName(){  
      return this.form.get('lastName');  
  }  
  
  get password(){  
      return this.form.get('password');  
  }  
  
  get address(){  
      return this.form.get('address');  
  }  

  get dob(){  
    return this.form.get('dob');  
}  

get company(){  
  return this.form.get('company');  
} 
  
  
}  