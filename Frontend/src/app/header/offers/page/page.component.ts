import { Component, OnInit } from '@angular/core';
import { Offer } from '../../../models/Offer';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from '../../../services/offer.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  offer!:Offer
  constructor(ActivatedRoute:ActivatedRoute,offerService:OfferService,private cartService:CartService,private router:Router) { 
    ActivatedRoute.params.subscribe((params) =>
    {
      if(params.id)
       offerService.getOfferById(params.id).subscribe(serverOffer => 
        {
          this.offer = serverOffer
        })
    })
  }

  ngOnInit(): void {
  }

  addToBooking()
  {
    this.cartService.addToBooking(this.offer)
    this.router.navigateByUrl('/page')
  }

}
