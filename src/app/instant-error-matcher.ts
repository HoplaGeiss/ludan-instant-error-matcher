import { FormControl } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class InstantErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return control !== null && control.invalid && (control.dirty || control.touched);
  }
}
