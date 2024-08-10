
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfoli-web-angular';

  isMobileMenuOpen: boolean = false;

  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  ngOnInit(): void {
    initFlowbite();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      setTimeout(() => {
        this.isMobileMenuOpen = false;
      }, 300);
    }
  }

}
