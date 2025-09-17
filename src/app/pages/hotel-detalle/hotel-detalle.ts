import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelService } from '../../services/hotel';
import { Hotel } from '../../interfaces/hotel.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-detalle',
  imports: [CommonModule],
  templateUrl: './hotel-detalle.html',
  styleUrl: './hotel-detalle.scss',
  standalone: true,
})
export class HotelDetalle implements OnInit {
  hotel: Hotel | null = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ){}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hotelService.getHotelById(id).subscribe({
      next: (data) => {
        this.hotel = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar el hotel';
        this.loading = false;
      }
    });
  }
}
