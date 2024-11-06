import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'faqs',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {

}
