import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../models/Booking';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @Input()
  order!:Booking;
  constructor() { }

  ngOnInit(): void {
  }

}
