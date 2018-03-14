import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { IPost } from '../models/post'
import { LoadingController } from 'ionic-angular'
import { DomSanitizer } from '@angular/platform-browser'
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer'
import { File } from '@ionic-native/file'
import { AuthService } from './auth.service'
import { env } from '../../environments/env'

@Injectable()
export class PostService {

	constructor(private loadingCtrl: LoadingController,
	            private http: HttpClient,
	            private transfer: FileTransfer,
	            private file: File,
	            private authService: AuthService) {
	}

	findPosts(): Observable<any> {
		return this.http.get(env.END_POINT + 'posts')
	}

	createPost(body: IPost): Promise<any> {
		return this.authService.getToken().then(token => {
			const fileTransfer: FileTransferObject = this.transfer.create()
			const options: FileUploadOptions = {
				fileKey: 'file',
				fileName: body.file.fileName,
				headers: {
					'X-ACCESS-TOKEN': token
				},
				params: {
					description: body.description,
					location: body.location
				}
			}

			return fileTransfer.upload(body.file.photoURL, `${env.END_POINT}posts`, options)
		})
	}
}