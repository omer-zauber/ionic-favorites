import { Component } from '@angular/core';
import { LibraryPage } from '../library/library';
import { FavoritesPage } from '../favorites/favorites';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FavoritesPage;
  tab2Root = LibraryPage;

  constructor() {

  }
}
