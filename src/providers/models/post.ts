import { PostStatus } from './post-status';
import { PostType } from './post-type';

export interface IPost {
	[key: string]: any

  source?: string[]
  description?: string
  location?: string
  coordinates?: [number, number]
  user?: string
  info?: string
  status?: PostStatus
  type?: PostType
}
