import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { error } from 'util';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}

    register(credentials) {
        this.http.post<any>(`http://localhost:5000/api/account`, credentials)
            .subscribe(res => {
              localStorage.setItem('authToken', res);
              console.log(localStorage.getItem('authToken'));
            },
               err => console.log(err)
        );
    }

}
