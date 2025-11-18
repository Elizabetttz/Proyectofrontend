import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Footer } from '../footer/footer';
import { MenuNav } from "../menu-nav/menu-nav";

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, Footer, MenuNav],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Datos del formulario:', form.value);
      form.resetForm();
    }
  }
}
