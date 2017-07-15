import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { Settings } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Settings;
  tab3Root = ContactPage;

  constructor() {

  }
}
