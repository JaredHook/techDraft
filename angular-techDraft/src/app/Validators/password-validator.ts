import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const password2 = control.get('password2');
  if (password.pristine || password2.pristine) {
    return null;
  }
  return password && password2 && password.value != password2.value ?
    { 'misMatch': true } : null;
}
