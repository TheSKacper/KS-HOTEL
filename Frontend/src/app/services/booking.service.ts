import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORDER_CREATE_URL } from '../constants/urls';
import { Booking } from '../models/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {


  
  constructor(private http: HttpClient) { }

  create(order:Booking){
    return this.http.post<Booking>(ORDER_CREATE_URL, order);
  }

}
