import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  highlights = [
    { icon: 'school',        label: 'Analista en Sistemas Informáticos', sub: 'UNC — Tesis en curso' },
    { icon: 'code',          label: 'Desarrollo .NET & Angular',         sub: 'Backend · Frontend · Full-Stack' },
    { icon: 'support_agent', label: 'Perspectiva funcional',             sub: 'Experiencia real con usuarios finales' },
    { icon: 'build',         label: 'Proyectos reales',                  sub: 'Sistemas construidos desde cero' },
  ];
}
