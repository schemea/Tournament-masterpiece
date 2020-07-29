import { Injectable } from '@angular/core';
import { AsyncValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserService } from '@tn/src/app/pages/users/user.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationErrorsService {

  constructor(private userService: UserService) { }
  forbiddenNameValidator(): AsyncValidatorFn {
    return ((control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.userService.getByName(control.value).pipe(
        map(res => {
          return res ? { forbiddenNameValidator: true } : null;
        })
      )
    })
  }

  passwordConfirming(group: FormGroup): { [key: string]: boolean } | null {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true }
  }
}