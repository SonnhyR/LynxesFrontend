import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LimpiezaComponent } from '../limpieza/limpieza.component';

@Component({
  selector: 'vista',
  standalone: true,
  imports: [NavbarComponent, LimpiezaComponent],
  templateUrl: './vista.component.html',
  styleUrl: './vista.component.css'
})
export class VistaComponent {

  
}
