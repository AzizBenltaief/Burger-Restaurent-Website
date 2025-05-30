import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
    standalone: true,
  selector: 'reservation-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {
  title = 'Restaurent';
  fullName: string = '';
    address: string = '';
    phone: string = '';
    date: string = '';
    time: string = '';
    comment: string = '';
    onSubmit() {
        if (this.fullName && this.address && this.phone && this.date && this.time) {
            window.alert('Your reservation has been submitted successfully!');
            this.resetForm(); 
        } else {
            window.alert('Please fill out all required fields.');
        }
    }
    resetForm() {
        this.fullName = '';
        this.address = '';
        this.phone = '';
        this.date = '';
        this.time = '';
        this.comment = '';
    }
}