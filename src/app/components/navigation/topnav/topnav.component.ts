import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  isDropdownOpen = false;
  activeDropdown: string | null = null;
  isMobileMenuOpen = false;

  navlinks = [
    {
      'id': 1, 'title': 'home', 'routerlink': '/home'
    },
    {
      'id': 2, 'title': 'Our capabilities', 'caret': true, 'children': [
        { 'subtitle': 'home services' },
        { 'subtitle': 'commercial services' },
        { 'subtitle': 'housing society services' },
      ]
    },
    {
      'id': 3, 'title': 'solar solutions', 'caret': true, 'children': [
        { 'subtitle': 'off-grid' },
        { 'subtitle': 'on-grid' },
      ]
    },
    {
      'id': 4, 'title': 'our presence', 'caret': true, 'children': [
        { 'subtitle': 'Nagpur' },
        { 'subtitle': 'Wardha' },
        { 'subtitle': 'Bhandara' },
        { 'subtitle': 'Gondia' },
        { 'subtitle': 'Chandrapur' },
        { 'subtitle': 'Gadchiroli' },
        { 'subtitle': 'Amravati' },
        { 'subtitle': 'Akola' },
        { 'subtitle': 'Yavatmal' },
        { 'subtitle': 'Buldhana' },
        { 'subtitle': 'Washim' },
      ]
    },
    { 'id': 5, 'title': 'solar calculator', 'routerlink': '/calculator' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(menu: string, event: MouseEvent): void {
    event.stopPropagation();
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.activeDropdown = null;
    }
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu-item') && !target.closest('.mobile-menu-button')) {
      this.activeDropdown = null;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Close mobile menu when screen size increases beyond mobile breakpoint
    if (window.innerWidth > 768) {
      this.isMobileMenuOpen = false;
      this.activeDropdown = null;
    }
  }
}

