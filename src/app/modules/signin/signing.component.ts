import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.scss']
})
export class SigningComponent implements OnInit {

  signingForm!: FormGroup;
  hidePassword!: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createSigningForm();
  }

  onSubmit(): void {}

  private createSigningForm(): void {
    this.signingForm = this.fb.group({
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
