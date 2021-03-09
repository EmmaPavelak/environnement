import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  ngOnInit(): void {
  }


  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.registrationForm.value);
    this.registrationForm.reset();
  }

}
