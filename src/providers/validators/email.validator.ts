import { FormControl } from '@angular/forms'

export function EmailValidator(c: FormControl): {[key: string]: any} {
	const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return EMAIL_REGEX.test(c.value) ? null : {
		validateEmail: {
			valid: false
		}
	}
}