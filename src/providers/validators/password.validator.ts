import { AbstractControl } from '@angular/forms'

export function MatchPassword(AC: AbstractControl) {
	let password = AC.get('password').value
	let confirmPassword = AC.get('confirmPassword').value
	if (password != confirmPassword) {
		AC.get('confirmPassword').setErrors({matchPassword: true})
	} else {
		return null
	}
}