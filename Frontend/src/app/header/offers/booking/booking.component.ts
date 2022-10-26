import { Component, OnInit } from '@angular/core';
import { singleOffer } from '../../../models/singleOffer';
import { CartService } from '../../../services/cart.service';
import { OfferItem } from '../../../models/OfferItem';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking!:singleOffer
  constructor(private cartService:CartService) { 
    this.cartService.getCartObservable().subscribe((cart) => 
    {
      this.booking = cart
    })
  }

  ngOnInit(): void {
  }

  removeFromBooking(cartItem:OfferItem)
  {
    this.cartService.removeFromBooking(cartItem.offer.id)
  }

  changeQuantity(cartItem:OfferItem,quantityString:string)
  {
    const quantity = parseInt(quantityString)
    this.cartService.changeQuantity(cartItem.offer.id,quantity)
  }

}
