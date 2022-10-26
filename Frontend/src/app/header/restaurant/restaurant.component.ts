import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/Menu';
import { MenuService } from '../../services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {


  menu: Menu [] = []

  constructor(private meuService: MenuService,ActivatedRoute:ActivatedRoute) {
    let menuObservable: Observable<Menu[]>
    ActivatedRoute.params.subscribe((params) =>
    {
      if(params.tag)
      menuObservable = this.meuService.getMenuByTag(params.tag)
      else
      menuObservable = meuService.getMenu()

      menuObservable.subscribe((serverMenu) =>
      {
        this.menu = serverMenu
      })
    }) 

   
   
  }

  ngOnInit(): void {
  }

}
