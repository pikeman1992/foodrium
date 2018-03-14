import { Injectable } from '@angular/core';
import posts from './post-mock';
import users from './user-mock';

@Injectable()
export class PostService {

  getAll() {
    return Promise.resolve(posts);
  }

  getById(id) {
    return Promise.resolve(posts[id - 1]);
  }

  getUserByPostId(userId) {
    return Promise.resolve(users[userId - 1]);
  }

}