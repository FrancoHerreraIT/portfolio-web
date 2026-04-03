import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  // =============================================
  // REEMPLAZAR CON TUS DATOS REALES
  // =============================================
  readonly email      = 'tucorreo@gmail.com';                  // ← Tu email real
  readonly githubUrl  = 'https://github.com/TU_USUARIO';       // ← Tu GitHub
  readonly linkedinUrl = 'https://linkedin.com/in/TU_USUARIO'; // ← Tu LinkedIn
  // =============================================
}
