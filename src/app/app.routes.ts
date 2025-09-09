import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ServicesComponent } from './components/services/services';
import { ContactComponent } from './components/contact/contact'
import { AboutUsComponent } from './components/about-us/about-us';
import { HeaderComponent } from './components/header/header';

export const routes: Routes = [
    { path: '', component: HeaderComponent},
    { path: 'serviços', component: ServicesComponent },
    { path: 'contatos', component: ContactComponent },
    { path: 'sobrenós', component: AboutUsComponent}
    
];
