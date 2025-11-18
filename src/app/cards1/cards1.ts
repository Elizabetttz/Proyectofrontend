import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cards1',
  imports: [CommonModule, RouterLink],
  templateUrl: './cards1.html',
  styleUrl: './cards1.css'
})
export class Cards1 {
mascotas = [
  {
      tipo: 'Perro',
      nombre: 'Rocky Molly',
      descripcion: 'Curioso, extrovertido, amigable con otros perros, aunque no tanto con perras hembras. Se lleva bien con niños y gatos, es amoroso y social.',
      edad: '4 años',
      genero: 'macho',
      personalidad: 'Social, amoroso, activo',
      convivencia: 'Convive con niños y perros machos', 
      imagen: 'assets/cards1/perro1.jpg'
  },
  {
      tipo: 'Gato',
      nombre: 'Panchis',
      descripcion: 'Curioso, extrovertido, amigable con otros perros, aunque no tanto con perras hembras. Se lleva bien con niños y gatos, es amoroso y social.',
      edad: '2 años',
      genero: 'macho',
      personalidad: 'Social, amoroso, activo',
      convivencia: 'Convive con niños y perros machos',
      imagen: 'assets/cards1/lula.jpg'
  },
  {
      tipo: 'Perra',
      nombre: 'Ivanna',
      descripcion: 'Curiosa, extrovertida, amigable con otros perros, aunque no tanto con perras hembras. Se lleva bien con niños y gatos, es amorosa y social.',
      edad: '4 años',
      genero: 'hembra',
      personalidad: 'Social, amorosa, activa',
      convivencia: 'Convive con niños y perros machos',
      imagen: 'assets/cards1/rocky.jpg'
    },
    {
      tipo: 'Gata',
      nombre: 'Lula',
      descripcion: 'Curiosa, extrovertida, amigable con otros perros, aunque no tanto con perras hembras. Se lleva bien con niños y gatos, es amorosa y social.',
      edad: '10 meses',
      genero: 'hembra',
      personalidad: 'Independiente, amorosa, tranquila',
      convivencia: 'Convive con niños y gatos',
      imagen: 'assets/cards1/panchis.jpg'
    }
];
}
