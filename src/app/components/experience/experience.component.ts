import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  role:     string;
  company:  string;
  period:   string;
  type:     string;
  skills:   string[];
  bullets:  string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  items: ExperienceItem[] = [
    {
      role:    'Asesor Técnico',
      company: 'VN Global S.A.',
      period:  '2023 — 2024',
      type:    'Presencial',
      skills:  ['Soporte técnico', 'Diagnóstico', 'CRM', 'Comunicación'],
      bullets: [
        'Atención y resolución de incidencias técnicas de clientes de forma remota y presencial.',
        'Diagnóstico de problemas de hardware, software, redes y conectividad.',
        'Escalado y seguimiento de tickets en CRM, garantizando SLA internos.',
        'Formación continua en nuevas herramientas y procedimientos del área.',
      ],
    },
    {
      role:    'Responsable de Turno',
      company: 'YPF — Zarek SRL',
      period:  '2021 — 2023',
      type:    'Presencial',
      skills:  ['Liderazgo operativo', 'Responsabilidad', 'Trabajo bajo presión', 'Organización'],
      bullets: [
        'Coordinación del equipo de turno y apertura/cierre de caja.',
        'Resolución de conflictos con clientes y manejo de situaciones de presión.',
        'Control de inventario y cumplimiento de protocolos operativos.',
        'Responsabilidad total sobre las operaciones en ausencia del jefe de turno.',
      ],
    },
  ];
}
