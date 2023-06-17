import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { HTTPOPTIONS } from "../../../../shared/constant/http-options.constants";
import { SignupUser } from "../../model/signupUser.model";
import { MatRadioChange } from "@angular/material/radio";
import { USER_TYPES } from "../../../../shared/constant/user-type.contants";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  public signUpForm: FormGroup;
  public isSubmitted = false;
  options = ['-Select-','Option 1', 'Option 2', 'Option 3'];
  selectedOption: string='';

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _httpClient: HttpClient,
  ) {
    this.signUpForm = this._fb.group({});
  }

  ngOnInit(): void {
    this.setUpSignUpForm();
  }

  private setUpSignUpForm(): void {
    const emailReg = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const letters = /^[A-Za-z]+$/;

    this.signUpForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.pattern(letters)]],
      lastName: ['', [Validators.required, Validators.pattern(letters)]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern(emailReg)]],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      userType: [USER_TYPES.ROLE_CLIENT, [Validators.required]],
    });
  }

  public onCreate(): void {
    this.isSubmitted = true;
    if (this.signUpForm.valid) {
      const formValue = JSON.stringify(this.signUpForm.value);
      this._httpClient.post('/api/signupUsers' , formValue, HTTPOPTIONS).subscribe((response: any) => {
        this.signUpForm.reset();
        this._router.navigate(['account/login']);
      });
    }
  }

  onSelectUserType(event: MatRadioChange) {
    if (event.value) {
      this.signUpForm.get('userType')?.setValue(USER_TYPES.ROLE_Merchant);
    } else {
      this.signUpForm.get('userType')?.setValue(USER_TYPES.ROLE_CLIENT);
    }
  }
}
