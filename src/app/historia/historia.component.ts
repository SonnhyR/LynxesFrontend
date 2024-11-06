import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { VistaComponent } from '../vista/vista.component';

@Component({
  selector: 'historia',
  standalone: true,
  imports: [NavbarComponent, RouterModule, VistaComponent, RouterLink],
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.css'
})
export class HistoriaComponent {

}
