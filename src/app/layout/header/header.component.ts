import { Component } from '@angular/core';
import { INavLink } from '../../Interfaces/nav-link';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  serviceItems: INavLink[] = [
    {
      link: '/restaurants-list',
      text: 'Restaurants',
    },
    {
      link: '/shops-list',
      text: 'Shops',
    },
  ];
}
