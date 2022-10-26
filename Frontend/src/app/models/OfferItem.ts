import { Offer } from './Offer';
export class OfferItem
{
    constructor(public offer:Offer) {}
    
    quantity:number = 1
    price:number = this.offer.price
}