import {Schema, model} from 'mongoose';


export interface Menu{
    name:string
    type:string
    ingredient:string[]
    price:number
    image:string
    amount:number
    tags: string[]
}

export const MenuSchema = new Schema<Menu>({
    
        name: {type: String, required: true},
        type: {type: String, required: true},
        ingredient: {type: [String], required: true},
        price: {type: Number, required: true}, 
        image: {type: String, required: true},
        amount: {type: Number, required: true},
        tags: {type: [String]},
}, {
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

export const MenuModel = model<Menu>('menu', MenuSchema);