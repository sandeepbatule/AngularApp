import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/employee.service';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ManagerService } from './services/manager.service';  
  
// import ReactiveFormsModule for reactive form  
import { ReactiveFormsModule } from '@angular/forms';  
  
// import module for Routing.  
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([  
      {  
        path : '',  
        component : HomeComponent   
      },  
      {  
        path : 'login',  
        component : LoginComponent    
      },  
      {  
        path : 'signup',  
        component : SignupComponent   
      },  
      {  
        path : 'profile/:managerId',  
        component : ProfileComponent  
      }  
    ])  
  
  ],  
  providers: [EmployeeService,ManagerService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
