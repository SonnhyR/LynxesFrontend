import { RouterModule, Routes } from '@angular/router';  
import { VistaComponent } from './vista/vista.component';  
import { LimpiezaComponent } from './limpieza/limpieza.component';  
import { NgModule } from '@angular/core';  
import { HistoriaComponent } from './historia/historia.component';  
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { FaqsComponent } from './faqs/faqs.component';

export const routes: Routes = [  
  { path: '', redirectTo: '/vista', pathMatch: 'full' },  
  { path: 'vista', component: VistaComponent },  
  { path: 'limpieza', component: LimpiezaComponent }, // Sin el /  
  { path: 'historia', component: HistoriaComponent },  
  { path: 'objetivos', component: ObjetivosComponent},
  { path: 'faqs', component: FaqsComponent},
];  

@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }