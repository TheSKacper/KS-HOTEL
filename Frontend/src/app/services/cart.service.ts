import { Offer } from './../models/Offer';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { singleOffer } from '../models/singleOffer';
import { OfferItem } from '../models/OfferItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:singleOffer = this.getCartFromLocalStorage()
  private cartSubject: BehaviorSubject<singleOffer> = new BehaviorSubject(this.cart)
  constructor() { }

  addToBooking(offer:Offer):void
  {
    let cartItem = this.cart.items.find(item => item.offer.id === offer.id)
    if(cartItem)
    return

    this.cart.items.push(new OfferItem(offer))
    this.setCartToLocalStorage()
  }

  removeFromBooking(offerId:string):void
  {
    this.cart.items = this.cart.items.filter(item => item.offer.id != offerId)
    this.setCartToLocalStorage()
  }

  changeQuantity(offerId: string,quantity:number)
  {
    let cartItem = this.cart.items.find(item => item.offer.id === offerId)
    if(!cartItem)
    return 

    cartItem.quantity = quantity
    cartItem.price = quantity * cartItem.offer.price
    this.setCartToLocalStorage()
  }

  clearBooking()
  {
    this.cart = new singleOffer()
    this.setCartToLocalStorage()
  }

  getCartObservable(): Observable<singleOffer> {
    return this.cartSubject.asObservable();
  }

  getCart():singleOffer
  {
    return this.cartSubject.value
  }
  
  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): singleOffer {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new singleOffer();

  }
}
