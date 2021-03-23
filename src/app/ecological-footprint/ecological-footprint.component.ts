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
    this.testForm = this.formBuilder.group({
    /*  firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]*/
    });
  }

get f() { return this.testForm.controls; }

/*saveContact(){
  this.contactService.createContact(this.testForm.value).subscribe(
    res => {
      console.log(res);
      console.log("cool");
      //this.toastr.success('Votre compte a été créer avec succès.', 'Success');
      this.router.navigate(['contact-confirm']);
    },
    err => {
      this.submitted = false;
      console.log('Error occured:' , err);
     // this.toastr.error(err.message, 'Error occured');
    }
  );

}*/



  onSubmit(): void {
  
    this.submitted = true;
    
    // stop here if form is invalid
      if (this.testForm.invalid) {
        return;
    }
      console.warn('Your order has been submitted', this.testForm.value);
      this.router.navigate(['test-result']);
      //this.registrationForm.value.password=Base64.stringify(sha256(this.registrationForm.value.password));
         // this.saveContact();

      //this.registrationForm.reset();
      //this.router.navigate(['registration-confirm']);
  }

}
