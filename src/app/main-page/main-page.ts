import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuNav } from '../menu-nav/menu-nav';
import { Home } from '../home/home';
import { AboutUs } from '../about-us/about-us';
import { Footer } from '../footer/footer';
import { Cards1 } from '../cards1/cards1';
import { Contact } from '../contact/contact';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MascotasComponent } from '../mascotas/mascotas';

@Component({
  selector: 'app-main-page',
  imports: [RouterOutlet, MenuNav, Home, AboutUs, Footer, Cards1, CommonModule], 
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})

export class MainPageComponent {
    protected readonly title = signal('proyectoFrontend');

    constructor(private router: Router) {}
   
    whenisContact(){
      return this.router.url === '/contact'
    }
}

