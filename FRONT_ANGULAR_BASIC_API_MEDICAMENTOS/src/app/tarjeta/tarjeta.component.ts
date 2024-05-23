import { Component, Input, OnInit } from '@angular/core';
import { CmsService } from '../cms.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() id: number | undefined;
  imagenUrl: string = '';
  nombre: string = '';
  url: string = '';

  constructor(private route: ActivatedRoute,private cmsService: CmsService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Obtén el ID de la URL y conviértelo a número
      if (this.id !== undefined && this.id !== null) {
        this.cmsService.getMedicamentoPorId(this.id).subscribe((data: any[]) => {
          if (data && data.length > 0) {
            const medicamento = data[0]; // Obtiene el primer medicamento de la respuesta
            this.imagenUrl = medicamento.url;
            this.nombre = medicamento.nombreMedicamento;
            this.url = medicamento.url;
          } else {
            console.error('No se encontraron datos para el ID:', this.id);
          }
        });
      } else {
        console.error('ID no válido:', this.id);
      }
    });
  }

  irAHome(): void {
    this.router.navigate(['/home']); // Redirige al path 'home'
  }
}
