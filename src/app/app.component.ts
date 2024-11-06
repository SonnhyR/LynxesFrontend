import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VistaComponent } from './vista/vista.component';
import { LimpiezaComponent } from './limpieza/limpieza.component';
import { HistoriaComponent } from './historia/historia.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { FaqsComponent } from './faqs/faqs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VistaComponent, LimpiezaComponent, HistoriaComponent, ObjetivosComponent, FaqsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lynxes';
}
