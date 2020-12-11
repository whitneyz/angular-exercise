import {Component} from '@angular/core';

import {Friend} from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages = ['html', 'css', 'js', 'php'];
  friendModel = new Friend('', '', '', 0, []);
  public showFriend(): any
  {
    console.log(this.friendModel);
  }
}






