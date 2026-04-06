import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title:       string;
  subtitle:    string;
  description: string;
  highlights:  string[];
  tags:        string[];
  githubUrl:   string | null;
  demoUrl:     string | null;
  type:        'backend' | 'fullstack' | 'tooling';
  status?:     'en-construccion' | 'privado';
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title:       'Biblioteca Digital',
      subtitle:    'Proyecto Full-Stack',
      description:
        'Sistema completo de gestión de una biblioteca digital: catálogo de libros, autores, reseñas de usuarios y panel de administración. Construido con ASP.NET Core Web API en el backend y Angular en el frontend.',
      highlights: [
        'Autenticación JWT con refresh tokens y manejo de roles',
        'Lockout de cuentas, rate limiting y protección de endpoints',
        'Arquitectura en capas: Controllers, Services, Repositories',
        'Panel de administración con gestión de contenido',
        'Base de datos PostgreSQL con Entity Framework Core',
      ],
      tags:      ['ASP.NET Core', 'Angular', 'JWT', 'PostgreSQL', 'EF Core', 'Web API REST'],
      githubUrl: 'https://github.com/FrancoHerreraIT/proyecto-biblioteca', 
      demoUrl:   null,
      type:      'fullstack',
    },
    {
      title:       'Sistema de Gestión Académica',
      subtitle:    'Proyecto de Tesis',
      status:      'en-construccion',
      description:
        'Sistema para institución educativa desarrollado como trabajo de tesis. Cubre módulos de asistencia, gestión de usuarios, roles y lógica académica compleja. Refleja tanto el trabajo técnico como el análisis funcional del dominio.',
      highlights: [
        'Diseño basado en historias de usuario y reglas de negocio',
        'Arquitectura por capas: DTOs, servicios, repositorios',
        'Integración frontend Angular + backend .NET + base de datos',
        'Módulos de asistencia, usuarios y control de roles',
        'Documentación funcional y técnica del sistema',
      ],
      tags:      ['.NET', 'Angular', 'SQL Server', 'EF Core', 'Scrum', 'Análisis funcional'],
      githubUrl: null,
      demoUrl:   null,
      type:      'fullstack',
    },
  ];

  typeLabel(type: Project['type']): string {
    return { backend: 'Backend', fullstack: 'Full-Stack', tooling: 'Herramientas' }[type];
  }
}
