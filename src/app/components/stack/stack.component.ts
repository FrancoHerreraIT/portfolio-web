import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechItem {
  name:     string;
  devicon?: string;
  color:    string;
  abbr?:    string;
}

interface TechCategory {
  label: string;
  icon:  string;
  color: string;
  items: TechItem[];
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css',
})
export class StackComponent {
  categories: TechCategory[] = [
    {
      label: 'Backend',
      icon:  'dns',
      color: '#818cf8',
      items: [
        { name: '.NET',             devicon: 'devicon-dotnetcore-plain', color: '#818cf8' },
        { name: 'C#',               devicon: 'devicon-csharp-plain',     color: '#818cf8' },
        { name: 'ASP.NET Core',     devicon: 'devicon-dot-net-plain',    color: '#818cf8' },
        { name: 'Entity Framework', color: '#818cf8', abbr: 'EF' },
        { name: 'API REST',         color: '#818cf8', abbr: 'REST' },
        { name: 'JWT',              color: '#818cf8', abbr: 'JWT' },
      ],
    },
    {
      label: 'Frontend',
      icon:  'web',
      color: '#22d3ee',
      items: [
        { name: 'Angular',          devicon: 'devicon-angularjs-plain',  color: '#22d3ee' },
        { name: 'TypeScript',       devicon: 'devicon-typescript-plain', color: '#22d3ee' },
        { name: 'HTML5',            devicon: 'devicon-html5-plain',      color: '#22d3ee' },
        { name: 'CSS3',             devicon: 'devicon-css3-plain',       color: '#22d3ee' },
        { name: 'Angular Material', devicon: 'devicon-materialui-plain', color: '#22d3ee' },
      ],
    },
    {
      label: 'Datos & Herramientas',
      icon:  'hub',
      color: '#34d399',
      items: [
        { name: 'PostgreSQL',   devicon: 'devicon-postgresql-plain',         color: '#34d399' },
        { name: 'SQL Server',   devicon: 'devicon-microsoftsqlserver-plain', color: '#34d399' },
        { name: 'Git',          devicon: 'devicon-git-plain',                color: '#34d399' },
        { name: 'GitHub',       devicon: 'devicon-github-plain',             color: '#34d399' },
        { name: 'Postman',      devicon: 'devicon-postman-plain',            color: '#34d399' },
        { name: 'Azure DevOps', devicon: 'devicon-azure-plain',              color: '#34d399' },
      ],
    },
  ];
}
