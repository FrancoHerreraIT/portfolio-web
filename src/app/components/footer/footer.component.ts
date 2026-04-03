import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly githubUrl   = 'https://github.com/TU_USUARIO';       // ← Reemplazar
  readonly linkedinUrl = 'https://linkedin.com/in/TU_USUARIO';  // ← Reemplazar
}
