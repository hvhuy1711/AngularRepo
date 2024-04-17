import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// export function NoWhitespaceValidator() {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const { value: controlVal } = control;
//     const isWhiteSpaceOnly = (controlVal || '').trim().length === 0;
//     return isWhiteSpaceOnly
//       ? { whitespace: 'Value toàn là khoảng trắng' }
//       : null;
//   };
// }

export function NoWhitespaceValidator(control: AbstractControl) {
  const { value: controlVal } = control;
  const isWhiteSpaceOnly = (controlVal || '').trim().length === 0;
  return isWhiteSpaceOnly ? { whitespace: 'Value toàn là khoảng trắng' } : null;
}
