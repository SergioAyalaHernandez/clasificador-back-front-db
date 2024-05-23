import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CmsService} from "../cms.service";

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit{

  registros: any[] | undefined;
  chart: any;
  constructor(private route: ActivatedRoute,private cmsService: CmsService, private router: Router) {

  }

  ngOnInit(): void {
    this.cmsService.getRegistrosTwo().subscribe(data => {
      this.registros = data;
    });
  }
}
