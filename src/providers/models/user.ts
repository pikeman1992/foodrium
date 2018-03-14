export interface Authenticate {
	email: string
	password: string
	remember?: boolean
	username?: string
	condinates?: {
		latitude: number;
		longitude: number;
	}
}

export interface IUser {
	id: number;
	username: string;
	email: string;
	password: string;
	birthday?: Date;
	gender: boolean;
	bio?: string;
	phoneNumber?: number;
	avatar: string;
	fullName?: string;
	status?: string;
	token?: string;
	website?:string;
	createdAt?: Date;
	updatedAt?: Date;
}
