import mongoose, { model, Schema } from "mongoose";

export interface Offer
{
    id:string;
    name:string;
    type:string;
    price:number;
    country:string
    tags: string[];
    favorite:boolean;
    stars: number;
    imageUrl: string;
    checkIn: Date
    checkOut: Date
}

export const OfferSchema = new Schema<Offer>(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        tags: {type: [String]},
        price: {type: Number, required: true},
        country: {type: String, required: true},
        favorite: {type: Boolean, default: false},
        stars: {type: Number, required: true},
        imageUrl: {type: String, required: true},
        checkIn: {type: Date, required:true},
        checkOut: {type: Date, required: true},
    },
    {
        toJSON:
        {
            virtuals: true
        },
        toObject:
        {
            virtuals:true
        },
        timestamps:true
    }
)


export const OfferModel = model<Offer>('offer',OfferSchema)