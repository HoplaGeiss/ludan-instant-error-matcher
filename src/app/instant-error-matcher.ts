export class InstantErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return control && control.invalid && (control.dirty || control.touched);
  }
}
