import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecological-footprint',
  templateUrl: './ecological-footprint.component.html',
  styleUrls: ['./ecological-footprint.component.scss']
})
export class EcologicalFootprintComponent implements OnInit {

 
  
  submitted = false;
  testForm: FormGroup;


  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.testForm = this.formBuilder.group({ });
  }

get f() { return this.testForm.controls; }


  onSubmit(): void {
  
    this.submitted = true;
    
    if (this.testForm.invalid) {
        return;
    }
      console.warn('Your order has been submitted', this.testForm.value);
      this.router.navigate(['test-result']);      
  }

}
