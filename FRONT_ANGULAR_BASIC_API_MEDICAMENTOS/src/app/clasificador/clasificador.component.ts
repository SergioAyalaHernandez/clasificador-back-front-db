import { Component } from '@angular/core';
import {CmsService} from "../cms.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clasificador',
  templateUrl: './clasificador.component.html',
  styleUrls: ['./clasificador.component.css']
})
export class ClasificadorComponent {
  valorX: number = 0;
  valorY: number = 0;
  resultado: any;

  constructor(private cmsService: CmsService, private router: Router) {
  }

  enviarDatos() {
    this.cmsService.enviarValores(this.valorX, this.valorY).subscribe(
      (response) => {
        this.resultado = response;
        console.log('Recargando la página'); // Verificar que se alcanza esta línea
        window.location.reload();
      },
      (error) => {
        console.error('Error:', error);
      }
    );


  }
  irAHome(): void {
    this.router.navigate(['/home']); // Redirige al path 'home'
  }
}
