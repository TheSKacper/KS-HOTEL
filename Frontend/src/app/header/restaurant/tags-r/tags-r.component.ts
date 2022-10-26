import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../models/Tags';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-tags-r',
  templateUrl: './tags-r.component.html',
  styleUrls: ['./tags-r.component.css']
})
export class TagsRComponent implements OnInit {

  tags?:Tag[]

  constructor(menuService:MenuService) {
    menuService.getMenuAllTag().subscribe(serverTags => 
      {
        this.tags = serverTags
      })
   }

  ngOnInit(): void {
  }

}
