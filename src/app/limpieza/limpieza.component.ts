import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { VistaComponent } from '../vista/vista.component';

@Component({
  selector: 'limpieza',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavbarComponent, VistaComponent],
  templateUrl: './limpieza.component.html',
  styleUrl: './limpieza.component.css'
})
export class LimpiezaComponent {

}
