export class Offer{
    id!:string;
    name!:string;
    type!:string;
    price!:number;
    country!:string
    tags?: string[];
    favorite!:boolean;
    stars!: number;
    imageUrl!: string;
    checkIn!: Date
    checkOut!: Date
  }