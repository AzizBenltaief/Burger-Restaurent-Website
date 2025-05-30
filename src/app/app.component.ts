import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from "./menu/menu.component";
import { ReservationComponent } from "./reservation/reservation.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, WelcomeComponent, AboutComponent, MenuComponent, ReservationComponent, GalleryComponent,FormsModule,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Restaurent';
}
