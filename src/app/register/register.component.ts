import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
    registerForm;
    constructor(private apiSvc: AuthService, private fb: FormBuilder) {
        this.registerForm = fb.group ({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
}
