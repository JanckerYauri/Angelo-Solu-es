import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  contactForm = {
    name: '',
    ferramenta: '',
    marca: ''
  };

  constructor() { }

  onSubmit() {
    const numeroWhatsApp = '5531994380188';

    const mensagem = `Olá, meu nome é ${this.contactForm.name}. Vi seu site e gostaria de um orçamento para a ferramenta ${this.contactForm.ferramenta} da marca ${this.contactForm.marca}.`;

    const mensagemCodificada = encodeURIComponent(mensagem);

    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemCodificada}`;

    window.open(urlWhatsApp, '_blank');
  }
}