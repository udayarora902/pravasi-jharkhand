import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, // Required when using 'imports'
  imports: [RouterLink], // ✅ valid static import
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'], // also fix typo: `styleUrl` ➜ `styleUrls`
})
export class NavbarComponent {}
