import { Component, OnInit } from '@angular/core';
import { CmsService } from '../cms.service';
import { AlertService } from '../alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})

export class CmsComponent implements OnInit {
  registros: any[] = [];

  constructor(private cmsService: CmsService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerRegistros();
    console.log("entro acá")
  }

  obtenerRegistros(): void {
    this.cmsService.getRegistros().subscribe((data: any) => {
      this.registros = data;
    });
  }

  actualizarRegistro(id: number): void {
    console.log('Actualizar registro con ID:', id);
  }

  eliminarRegistro(idMedicamento: number): void {
    this.alertService.loading("¿Estás seguro de eliminar este registro?", "Eliminar").then((confirmado) => {
      if (confirmado) {
        console.log('Eliminar registro con ID:', idMedicamento);
        this.cmsService.eliminarRegistro(idMedicamento).subscribe(() => {
          console.log('Registro eliminado exitosamente.');
          this.obtenerRegistros();
        }, error => {
          console.error('Error al eliminar el registro:', error);
        });
      }
    });
  }

  recargarPagina(id: number): void {
    this.router.navigate(['/tarjeta', id]);
  }
  irAHome(): void {
    this.router.navigate(['/tarjetaCrear']);
  }
  actualizarPagina(id: number): void {
    this.alertService.loading("¿Estás seguro de actualizar este registro?", "Actualizar").then((confirmado) => {
      if (confirmado) {
        this.router.navigate(['/tarjetaActualizar', id]);
      }
    });
  }

}
