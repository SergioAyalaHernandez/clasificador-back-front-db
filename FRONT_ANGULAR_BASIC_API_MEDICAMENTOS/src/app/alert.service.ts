import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public async loading(text: string, action: string): Promise<boolean> {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      html: `<p>${text}</p>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006e0c",
      cancelButtonColor: "#d33",
      confirmButtonText: `Sí, ${action}`
    });

    if (result.isConfirmed) {
      await Swal.fire({
        title: `${action}`,
        text: `Your file has been ${action}.`,
        icon: "success"
      });
      return true;
    } else {
      return false;
    }
  }
  constructor() { }
}
