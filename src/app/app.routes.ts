import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { MascotasComponent } from './mascotas/mascotas';
import { MainPageComponent } from './main-page/main-page';

export const routes: Routes = [
    {
        path: '', component: MainPageComponent   }
    ,
    {path: 'contact', component: Contact },
    {
        path: 'footer', component: Footer
    },
    {
        path: 'mascotas', component: MascotasComponent
    }


];
