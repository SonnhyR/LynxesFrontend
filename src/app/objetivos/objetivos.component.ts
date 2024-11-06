import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink, RouterModule } from '@angular/router';
import { VistaComponent } from '../vista/vista.component';

@Component({
  selector: 'objetivos',
  standalone: true,
  imports: [NavbarComponent, RouterLink, RouterModule, VistaComponent],
  templateUrl: './objetivos.component.html',
  styleUrl: './objetivos.component.css'
})
export class ObjetivosComponent {

}
