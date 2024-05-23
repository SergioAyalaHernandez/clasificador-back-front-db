import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CmsService} from "../cms.service";

@Component({
  selector: 'app-tarjeta-actualizar',
  templateUrl: './tarjeta-actualizar.component.html',
  styleUrls: ['./tarjeta-actualizar.component.css']
})
export class TarjetaActualizarComponent {
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

  actualizarRegistro(): void {
    if (this.id !== undefined && this.id !== null) {
      this.cmsService.actualizarRegistro(this.id, this.nombre, this.url).subscribe(() => {
        console.log('Registro actualizado exitosamente.');
        this.irAHome();
      }, error => {
        console.error('Error al actualizar el registro:', error);
      });
    } else {
      console.error('ID no válido:', this.id);
    }
  }
}
