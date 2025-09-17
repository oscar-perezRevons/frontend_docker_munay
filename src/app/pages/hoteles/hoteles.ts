import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelService } from '../../services/hotel';
import { Hotel } from '../../interfaces/hotel.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hoteles',
  imports: [CommonModule, RouterLink],
  templateUrl: './hoteles.html',
  styleUrl: './hoteles.scss',
  standalone: true
})
export class Hoteles implements OnInit{
  hoteles: Hotel[] = [];
  loading = true;
  error = '';

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.hotelService.getHoteles().subscribe({
      next: (data) => {
        console.log("Datos recibidos de hoteles:", data);
        this.hoteles = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los hoteles';
        this.loading = false;
        console.error("Error al cargar hoteles:", err);
      }
    });
  } 
}
