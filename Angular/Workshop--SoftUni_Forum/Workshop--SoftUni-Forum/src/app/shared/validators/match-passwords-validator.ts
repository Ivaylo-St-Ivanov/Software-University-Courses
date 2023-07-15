import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(passControlOne: string, passControlTwo: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        const pass1 = group.get(passControlOne);
        const pass2 = group.get(passControlTwo);

        return pass1?.value == pass2?.value
            ? null
            : { matchPasswordsValidator: true };
    };
}