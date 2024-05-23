import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import {CmsService} from "../cms.service";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-graficacion',
  templateUrl: './graficacion.component.html',
  styleUrls: ['./graficacion.component.css']
})
export class GraficacionComponent implements OnInit{
  grafico: Chart<"scatter", { x: number; y: number; label: string; }[], unknown> | undefined;
  registros: any[] | undefined;
  constructor(private cmsService: CmsService) {

  }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(): void {
    this.cmsService.getRegistrosTwo().subscribe(data => {
      this.registros = data;
      const datos = this.transformarDatos(data); // Transforma los datos para el gráfico
      this.crearGrafico(datos);
    });
  }

  transformarDatos(datos: any[]): { x: number; y: number; label: string; }[] {
    return datos.map(item => ({
      x: item.x,
      y: item.y,
      label: item.observacion
    }));
  }

  crearGrafico(datos: { x: number; y: number; label: string; }[]): void {
    const ctx = document.getElementById('miGrafico') as HTMLCanvasElement;
    if (ctx) {
      this.grafico = new Chart(ctx, {
        type: 'scatter',
        data: {
          datasets: [{
            label: 'Puntos',
            data: datos,
            borderColor: 'black',
            backgroundColor: 'gray',
            pointRadius: 5,
            pointBackgroundColor: (context) => {
              // @ts-ignore
              const label = context.dataset.data[context.dataIndex].label;
              return label === 'Altos' ? 'red' : 'gray';
            }
          }]
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom'
            },
            y: {
              type: 'linear',
              position: 'left'
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  // @ts-ignore
                  const label = context.dataset.data[context.dataIndex].label;
                  return `Observación: ${label}`;
                }
              }
            }
          }
        }
      });
    }


  }
}
