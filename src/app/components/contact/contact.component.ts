import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly email      = 'francoherreramoyano@gmail.com';                  
  readonly githubUrl  = 'https://github.com/FrancoHerreraIT';       
  readonly linkedinUrl = 'https://www.linkedin.com/in/francoherreramoyano/'; 
  
}
