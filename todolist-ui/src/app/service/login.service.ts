import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  token:any = '';
  constructor(private http: HttpClient) { }

  login(username:any,password:any){

    return this.http.post(`${environment.loginServiceBaseUrl}/authenticate`,{
      "username":username,
      "password":password
    })
  }

  getBalance(){
    return this.http.get(`${environment.atmServiceBaseUrl}/api/v1/retrievebalance`);
  }
}
