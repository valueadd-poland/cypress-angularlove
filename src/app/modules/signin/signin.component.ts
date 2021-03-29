import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;
  hidePassword!: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createSigninForm();
  }

  onSubmit(): void {}

  private createSigninForm(): void {
    this.signinForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required],
      remember: [false, Validators.required]
    });
    this.hidePassword = true;
  }
}
