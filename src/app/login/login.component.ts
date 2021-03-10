import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

constructor(private formBuilder: FormBuilder, private router: Router) {
  this.loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required] //, Validators.minLength(6)
  });
}
  ngOnInit(): void {
  }

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
  }
    console.warn('Your order has been submitted', this.loginForm.value);
    this.loginForm.reset();
    this.router.navigate(['home']);
  }
}
