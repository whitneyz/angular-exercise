import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from './friend';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  /*post request to fetch http*/
  constructor(private http: HttpClient) {
  }
  url = 'http://localhost:9100/addFriend';

  /*parameter die binnenkomt moet een typehint zijn en daarnaast Observable is ook een typehint*/
  addFriend(friend: Friend): Observable<any> {
    return this.http.post(this.url, friend);
  }
}
