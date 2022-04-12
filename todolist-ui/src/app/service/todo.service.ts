import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(private http: HttpClient, private loginService: LoginService) { }


  getAllLists(){
    console.log(this.loginService.token);
    
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.loginService.token); 
    return this.http.get(`${environment.atmServiceBaseUrl}/api/v1/task?sort=updateTime,desc`,{headers});
  }

  addList(task:any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.loginService.token); 
    return this.http.post(`${environment.atmServiceBaseUrl}/api/v1/task`,task,{headers});

  }


  updateList(list:any){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.loginService.token); 
    return this.http.put(`${environment.atmServiceBaseUrl}/api/v1/task/${list.id}`,list,{headers});

  }

  deleteTask(id:any){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.loginService.token); 
    return this.http.delete(`${environment.atmServiceBaseUrl}/api/v1/task/${id}`,{headers});

  }


}
