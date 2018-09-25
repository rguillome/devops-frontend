import { Component, OnInit } from '@angular/core';
import Gafa from '../model/Gafa';
import {GafaService} from '../services/gafa.service';

@Component({
  selector: 'app-dashboard-gafa',
  templateUrl: './dashboard-gafa.component.html',
  styleUrls: ['./dashboard-gafa.component.css'],
  providers: [GafaService]
})
export class DashboardGafaComponent implements OnInit {

  gafas:Array<Gafa> = [];

  constructor(private gafaService:GafaService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.loadListGafaFromService();
  }

  private loadListGafaFromService() {
    this.gafaService.getGafaStatus().subscribe(
      (result:Array<Gafa>) => {
        this.gafas = result;
      },
      (error) => console.log(error),
      () => console.log("Call to Gafa status service")
    );
  }
}