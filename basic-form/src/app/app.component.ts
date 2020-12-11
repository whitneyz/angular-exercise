import {Component} from '@angular/core';
import {AddFriendService} from './add-friend.service';
import {Friend} from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages = ['html', 'css', 'js', 'php'];
  friendModel = new Friend('', '', '', 0, []);

  constructor(private addFriendService: AddFriendService) {
  }
  public showFriend(): any {
    this.addFriendService.addFriend(this.friendModel)
    .subscribe(
      succes => console.log(this.showFriend),
      error => console.log(error)
    );
    console.log(this.friendModel);
  }


}






