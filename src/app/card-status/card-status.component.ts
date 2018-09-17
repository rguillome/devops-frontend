import { Component, OnInit, Input } from '@angular/core';
import Gafa from '../model/Gafa';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent implements OnInit {

  @Input() gafa:Gafa;

  constructor() { }

  ngOnInit() {
  }

}
