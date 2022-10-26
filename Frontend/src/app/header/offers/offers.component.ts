import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../../models/Offer';
import { OfferService } from '../../services/offer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {


  offers: Offer[] = []
  
  constructor(private OfferService:OfferService, activatedRoute:ActivatedRoute) {
    let offersObservable:Observable<Offer[]>
    activatedRoute.params.subscribe((params) =>
    {
      if(params.searchTerm)
      offersObservable = this.OfferService.searchOfferByTerm(params.searchTerm)
      else if(params.tag)
      offersObservable  = this.OfferService.getAllOffersByTag(params.tag)
      else 
      offersObservable  = OfferService.getAllOffers()


      offersObservable.subscribe((serverOffer) => 
      {
        this.offers = serverOffer
      })
      
    })
   }

  ngOnInit(): void {
  }

}
