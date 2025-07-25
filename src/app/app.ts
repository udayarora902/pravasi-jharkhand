import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    NavbarComponent,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');
}
