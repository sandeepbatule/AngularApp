import { Component, OnInit } from '@angular/core';  
import { ManagerService } from '../services/manager.service';  
import { ActivatedRoute, Router } from '@angular/router';  
  
@Component({  
  selector: 'app-profile',  
  templateUrl: './profile.component.html',  
  styleUrls: ['./profile.component.css']  
})  
export class ProfileComponent implements OnInit {  
  
  private id;  
  private haveData= 0;  
  
  private data = [];  
  
  private dataRequest = false;  
  
  constructor(private managerService  : ManagerService, private route : ActivatedRoute, private router : Router) { }  
  
  ngOnInit() {  
  
    if((this.managerService.isLoggedIn()) )  
    {  
      this.route.paramMap.subscribe(params => {  
        this.id =+ params.get('id');  
      });  
    }  
    else  
    {  
        this.router.navigate(['/login']);  
    }  
  
  }  
  
  getAdminData()  
  {  
      this.haveData = 0;  
  
      this.dataRequest = true;  
  
      this.managerService.getManagerDetail(this.id).subscribe(  
          response => {  
  
              let result = response.json();  
              this.data = result;  
  
              if(result == " ")  
              {  
                  this.haveData = 0;  
              }  
              else  
              {  
                this.haveData = this.haveData + 1;  
              }  
          },  
          error => {  
              console.log("error while getting Admin Data");  
          }  
      );  
  }  
  
}  