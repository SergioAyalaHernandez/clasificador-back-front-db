import { Component } from '@angular/core';
import {CmsService} from "../cms.service";

@Component({
  selector: 'app-tarjeta-crear',
  templateUrl: './tarjeta-crear.component.html',
  styleUrls: ['./tarjeta-crear.component.css']
})
export class TarjetaCrearComponent {
  nombreMedicamento: string = '';
  url: string = '';
  imagenUrl: string = '';

  constructor(private cmsService: CmsService) { }

  agregarRegistro(): void {
    if (this.nombreMedicamento.trim() !== '' && this.url.trim() !== '') {
      this.cmsService.agregarRegistro(this.nombreMedicamento, this.url).subscribe((data: any) => {
        // Actualiza la imagen URL con la URL válida del nuevo registro
        this.imagenUrl = data.url;
      }, error => {
        console.error('Error al agregar el registro:', error);
      });
    }
  }

  validarUrl(): void {
    // Verifica si la URL es válida (por ejemplo, si comienza con "http://" o "https://")
    if (this.url.startsWith('http://') || this.url.startsWith('https://')) {
      // Si la URL es válida, actualiza la imagen URL con la URL ingresada
      this.imagenUrl = this.url;
    } else {
      // Si la URL no es válida, muestra una imagen por defecto o realiza alguna acción adecuada
      this.imagenUrl = ''; // Puedes establecer una imagen por defecto o dejar vacío
    }
  }
}
