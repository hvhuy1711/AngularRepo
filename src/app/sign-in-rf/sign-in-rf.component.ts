import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { NoWhitespaceValidator } from '../shareds/validators/No-White-space.validators';

@Component({
  selector: 'app-sign-in-rf',
  templateUrl: './sign-in-rf.component.html',
  styleUrl: './sign-in-rf.component.css',
})
export class SignInRfComponent implements OnInit {
  // signInForm = new FormGroup({
  //   username: new FormControl(''), // <== default value
  //   password: new FormControl(''), // <== default value
  //   rememberMe: new FormControl(false), // <== default value
  // });

  signInForm = this.fb.group({
    username: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        // Validators.pattern(/^[a-z]{6,32}$/i),
        NoWhitespaceValidator(),
      ]),
    ],
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/),
      ]),
    ],
    rememberMe: false,
  });
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    // this.signInForm.controls.username.setValue('Trung');

    // this.signInForm.setValue({
    //   username: 'Trung',
    //   password: '123456',
    //   rememberMe: true,
    // });

    this.signInForm.patchValue({});

    // onSubmit(): void {
    //   console.log(this.signInForm.value);
    // }
  }

  username = new FormControl('', Validators.minLength(6));
  control = this.fb.control('', Validators.minLength(6));
}
