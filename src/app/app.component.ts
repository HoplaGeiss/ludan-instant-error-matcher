import { InstantErrorMatcher } from './instant-error-matcher';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

const VALIDATOR_REGEX = /^([a-z])*$/;

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  form = this.fb.group({ name: ['', Validators.pattern(VALIDATOR_REGEX)] });
  matcher = new InstantErrorMatcher();

  constructor(private fb: FormBuilder) {}

  get nameControl(): AbstractControl {
    return this.form.get('name') as AbstractControl;
  }
}
