
import { sample_offers, sample_tags } from "../data"

import { OfferModel } from '../models/offers.models';

import {Router} from 'express';

import asyncHandler from 'express-async-handler';

const router = Router();

router.get("/seed", asyncHandler(
 async (req, res) => {
    const offersCount = await OfferModel.countDocuments();
    if(offersCount> 0){
      res.send("Seed is already done!");
      return;
    }

    await OfferModel.create(sample_offers);
    res.send("Seed Is Done!");
}
))


router.get("/",asyncHandler(
  async (req, res) => {
    const offer = await OfferModel.find();
      res.send(offer);
  }
))

router.get("/search/:searchTerm", asyncHandler(
  async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const offer = await OfferModel.find({name: {$regex:searchRegex}})
    res.send(offer);
  }
))

router.get("/tags", asyncHandler(
  async (req, res) => {
    const tags = await OfferModel.aggregate([
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
      count: await OfferModel.countDocuments()
    }

    tags.unshift(all);
    res.send(tags);
  }
))

router.get("/tag/:tagName",asyncHandler(
  async (req, res) => {
    const offer = await OfferModel.find({tags: req.params.tagName})
    res.send(offer);
  }
))

router.get("/:offerId", asyncHandler(
  async (req, res) => {
    const offer = await OfferModel.findById(req.params.offerId);
    res.send(offer);
  }
))


export default router;