import { Component, signal } from '@angular/core';
import { MenuNav } from "../menu-nav/menu-nav";

@Component({
    selector: 'app-mascotas',
    standalone: true,
    imports: [MenuNav],
    templateUrl: './mascotas.html',
    styleUrl: './mascotas.css'
})
export class MascotasComponent {

}