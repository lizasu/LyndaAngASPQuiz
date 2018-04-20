import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req, next) {
        const authToken = localStorage.getItem('authToken');
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${authToken}`)
        });
        return next.handle(authRequest);
    }

}
