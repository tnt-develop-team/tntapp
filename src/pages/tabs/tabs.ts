import { Component } from '@angular/core';

import { MyPage } from '../my/my';
import { ChatPage } from '../chat/chat';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyPage;
  tab3Root = ChatPage;

  constructor() {

  }
}
