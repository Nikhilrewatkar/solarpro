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
      'id': 1, 'title': 'Our capabilities', 'caret': true, 'children': [
        { 'subtitle': 'home' },
        { 'subtitle': 'commercial' },
        { 'subtitle': 'housing society' },
      ]
    },
    {
      'id': 2, 'title': 'solar solutions', 'caret': true, 'children': [
        { 'subtitle': 'off-grid' },
        { 'subtitle': 'on-grid' },
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

