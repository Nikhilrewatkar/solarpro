import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  isDropdownOpen = false;
  activeDropdown: string | null = null;
  navlinks = [
    {
      'id': 1, 'title': 'our offerings', 'caret': true, 'children': [
        { 'subtitle': 'offering 1' },
        { 'subtitle': 'offering 2' },
        { 'subtitle': 'offering 3' },
      ]
    },
    {
      'id': 2, 'title': 'solar solutions', 'caret': true, 'children': [
        { 'subtitle': 'solutions 1' },
        { 'subtitle': 'solutions 2' },
        { 'subtitle': 'solutions 3' },
      ]
    },
    { 'id': 3, 'title': 'our presence' },
    { 'id': 4, 'title': 'blog' },
    { 'id': 5, 'title': 'more' },
  ]

  constructor() { }



  ngOnInit(): void {
  }

  toggleDropdown(menu: string, event: MouseEvent): void {
    event.stopPropagation(); // Prevent outside click from closing immediately
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu-item')) {
      this.activeDropdown = null;
    }
  }

}





