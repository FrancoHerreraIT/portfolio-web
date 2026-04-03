import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  // =============================================
  // REEMPLAZAR ESTOS VALORES CON TUS DATOS REALES
  // =============================================
  readonly githubUrl    = 'https://github.com/TU_USUARIO';      // ← Reemplazar
  readonly linkedinUrl  = 'https://linkedin.com/in/TU_USUARIO'; // ← Reemplazar
  readonly emailAddress = 'tucorreo@gmail.com';                  // ← Reemplazar
  // =============================================

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
