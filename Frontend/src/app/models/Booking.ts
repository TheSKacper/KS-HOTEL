import { OfferItem } from './OfferItem';
export class Booking 
{
  id!:number;
  items!: OfferItem[];
  totalPrice!:number;
  name!: string;
  address!: string;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}