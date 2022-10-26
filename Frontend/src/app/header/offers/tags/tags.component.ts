import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../models/Tags';
import { OfferService } from '../../../services/offer.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?:Tag[]
  constructor(offerService:OfferService) {
    offerService.getAllTags().subscribe(serverTags =>
      {
        this.tags = serverTags
      })
   }

  ngOnInit(): void {
  }

}
