import {Router} from 'express';

import asyncHandler from 'express-async-handler';
import { sample_menu } from '../data';
import { MenuModel } from '../models/menu.models';

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
       const menuCount = await MenuModel.countDocuments();
       if(menuCount> 0){
         res.send("Seed is already done!");
         return;
       }
   
       await MenuModel.create(sample_menu);
       res.send("Seed Is Done!");
   }
   ))



router.get('/',asyncHandler(async (req,res) =>
{
    const menu = await MenuModel.find()
    res.send(menu)
}))

router.get("/tagr", asyncHandler(
    async (req, res) => {
      const tags = await MenuModel.aggregate([
        {
          $unwind:'$tags'
        },
        {
          $group:{
            _id: '$tags',
            count: {$sum: 1}
          }
        },
        {
          $project:{
            _id: 0,
            name:'$_id',
            count: '$count'
          }
        }
      ]).sort({count: -1});
  
      const all = {
        name : 'All',
        count: await MenuModel.countDocuments()
      }
  
      tags.unshift(all);
      res.send(tags);
    }
  ))
  
  router.get("/tag/:tagName",asyncHandler(
    async (req, res) => {
      const foods = await MenuModel.find({tags: req.params.tagName})
      res.send(foods);
    }
  ))


export default router