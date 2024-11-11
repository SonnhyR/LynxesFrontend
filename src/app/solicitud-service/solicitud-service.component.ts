import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { VistaComponent } from '../vista/vista.component';

@Component({
  selector: 'solicitud-service',
  standalone: true,
  imports: [NavbarComponent, RouterLink, VistaComponent, RouterModule],
  templateUrl: './solicitud-service.component.html',
  styleUrl: './solicitud-service.component.css'
})
export class SolicitudServiceComponent {

  onSubmit() {  
    // Aquí puedes manejar el envío del formulario  
    alert('Formulario enviado correctamente!');  
  }  

}
