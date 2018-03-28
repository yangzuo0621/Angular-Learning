import { AbstractControl, ValidatorFn } from '@angular/forms';

// export function ratingRange(c: AbstractControl): { [key: string]: boolean} | null {
//   if (c.value !== undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
//       return { 'range': true }; // invalid
//   }
//   return null; // valid
// }

export function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
        return { 'range': true }; // invalid
    }
    return null; // valid
  };
}
