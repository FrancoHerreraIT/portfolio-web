import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OfferItem {
  icon:  string;
  title: string;
  desc:  string;
}

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css',
})
export class OfferComponent {
  items: OfferItem[] = [
    {
      icon:  'developer_mode',
      title: 'Sistemas web a medida',
      desc:  'Desarrollo sistemas completos adaptados a tu negocio: desde la base de datos hasta la interfaz de usuario, pensados para durar.',
    },
    {
      icon:  'api',
      title: 'APIs REST robustas',
      desc:  'Backends escalables con .NET, autenticación JWT, arquitectura en capas y endpoints documentados.',
    },
    {
      icon:  'devices',
      title: 'Frontend moderno',
      desc:  'Interfaces con Angular y TypeScript: diseño responsivo, componentes reutilizables y foco en la experiencia del usuario.',
    },
    {
      icon:  'storage',
      title: 'Base de datos integrada',
      desc:  'Diseño e integración con PostgreSQL o SQL Server: modelado relacional y consultas optimizadas para tu negocio.',
    },
    {
      icon:  'layers',
      title: 'Arquitectura pensada',
      desc:  'Código organizado y mantenible. Arquitectura por capas para que el sistema pueda crecer con el tiempo sin deuda técnica.',
    },
    {
      icon:  'support_agent',
      title: 'Comunicación directa',
      desc:  'Te explico en términos claros lo que se construye, cómo avanza y qué decisiones se toman en cada etapa del proyecto.',
    },
  ];
}
