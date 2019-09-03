import {Component,OnInit} from '@angular/core';
import {Employee} from './employee';
import { templateJitUrl } from '@angular/compiler';

import { error } from 'util';
import { EmployeeService } from './employee.service';

@Component({
    selector:'app-employee',
    templateUrl:'./employee.component.html',
    styleUrls:['./employee.component.css']
})

export class EmployeeComponent implements OnInit{

    employees:Employee[];
    employee=new Employee();

    constructor(private _httpService:EmployeeService){}

    ngOnInit():void{
        this.getEmployees();
    }

    getEmployees():void{
        this._httpService.getAllEmployees()
        .subscribe((employeeData)=>
        {
            this.employees=employeeData,
            console.log(employeeData)
        },
        (error)=>
        {console.log(error);});
    }

    addEmployee(){
        this._httpService.addEmployee(this.employee)
        .subscribe((response)=>
        {
            console.log(response);
            this.reset();
            this.getEmployees();
            
        },
        (error)=>{console.log(error);});
    }

    private reset(){
        this.employee.empId=null;
        this.employee.firstName=null;
        this.employee.lastName=null;
        this.employee.address=null;
        this.employee.dob=null;
        this.employee.mobile=null;
        this.employee.city=null;
    }

    deleteEmployee(employeeId:string)
    {
        this._httpService.deleteEmployee(employeeId)
        .subscribe((response)=>
        {console.log(response);
            this.reset();
            this.getEmployees();},
        (error)=>{console.log(error);});
    }

    getEmployeeById(employeeId:string){
        this._httpService.getEmployeeById(employeeId)
        .subscribe((employeeData)=>{this.employee=employeeData;this.getEmployees();},(error)=>{console.log(error)});
    }
}