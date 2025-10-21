import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuNav } from './menu-nav/menu-nav';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuNav, Home, AboutUs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoFrontend');
}
