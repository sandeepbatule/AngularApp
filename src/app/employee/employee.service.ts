import {Http,Response,RequestOptions,Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Employee } from './employee';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService{
    constructor(private _httpService:Http){}

    getAllEmployees():Observable<Employee[]>{
        return this._httpService.get("http://localhost:1001/LoginLogoutExample/api/employees")
                .map((response:Response ) => response.json())
                .catch(this.handleError);
    }

    private handleError(error:Response){
        return Observable.throw(error);
    }

    addEmployee(employee:Employee){
        let body=JSON.stringify(employee);
        let headers=new Headers({'content-type':'application/json'});
        let options=new RequestOptions({headers:headers});
        if(employee.empId){
           return this._httpService.put('http://localhost:1001/LoginLogoutExample/api/employees/'+employee.empId,body,options);
        }else{
            return this._httpService.post("http://localhost:1001/LoginLogoutExample/api/employees",body,options);
        }
    }

    deleteEmployee(employeeId:string){
        return this._httpService.delete('http://localhost:1001/LoginLogoutExample/api/employees/'+employeeId)
    }

    getEmployeeById(employeeId:string):Observable<Employee>{
            return this._httpService.get('http://localhost:1001/LoginLogoutExample/api/employees/'+employeeId)
            .map((response:Response)=>response.json())
            .catch(this.handleError);
    }
}