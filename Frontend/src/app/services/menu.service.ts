import { Menu } from './../models/Menu';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MENU_URL, MENU_TAG_By_TAGS, MENU_TAGS_URL } from '../constants/urls';
import { Tag } from '../models/Tags';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  getMenu():Observable<Menu[]>
  {
    return this.http.get<Menu[]>(MENU_URL)
  }

  getMenuAllTag():Observable<Tag[]>
  {
    return this.http.get<Tag[]>(MENU_TAGS_URL)
  }

  getMenuByTag(tag:string):Observable<Menu[]>
  {
    return tag === 'All'?
    this.getMenu():
    this.http.get<Menu[]>(MENU_TAG_By_TAGS + tag)
  }
}
