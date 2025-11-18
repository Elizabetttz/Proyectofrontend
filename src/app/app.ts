import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MainPageComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  
}
