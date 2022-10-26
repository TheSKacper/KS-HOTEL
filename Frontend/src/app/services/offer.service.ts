import { OFFER_By_ID_URL } from './../constants/urls';
import { Injectable } from '@angular/core';
import { Offer } from '../models/Offer';
import { sample_offers, sample_tags } from '../date';
import { Tag } from '../models/Tags';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OFFER_URL, OFFER_SEARCH_URL, OFFER_TAGS_URL, OFFER_By_TAG_URL } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class OfferService {


  constructor(private http:HttpClient) { }

  getAllOffers():Observable<Offer[]>
  {
    return this.http.get<Offer[]>(OFFER_URL)
  }

  searchOfferByTerm(searchTerm:string)
  {
    return this.http.get<Offer[]>(OFFER_SEARCH_URL + searchTerm)
  }

  getAllTags():Observable<Tag[]>
  {
    return this.http.get<Tag[]>(OFFER_TAGS_URL)
  }

  getAllOffersByTag(tag:string):Observable<Offer[]>
  {
    return  tag === 'All'?
    this.getAllOffers():
    this.http.get<Offer[]>(OFFER_By_TAG_URL + tag)
  }

  getOfferById(offerId:string):Observable<Offer>
  {
    return this.http.get<Offer>(OFFER_By_ID_URL + offerId)
  }


}

