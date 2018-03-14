import {merge, mergeAll} from 'ramda'
import { DEFAULT_ENV } from './_default.env'
import { DEV_ENV } from './_development.env'
import { PROD_ENV } from './_production.env'

const MER_DEFAULT_ENV = mergeAll([
	DEFAULT_ENV
])

export const development = merge(MER_DEFAULT_ENV, DEV_ENV)

export const production = merge(MER_DEFAULT_ENV, PROD_ENV)

export const env = DEFAULT_ENV.APP_ENV === 'development' ? development : production as any