import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
    new Recipe('Atest Recipe','This is simple a test','https://www.cookipedia.co.uk/wiki/images/c/c2/Boiled_rice.jpg'),
    new Recipe('Atest Recipe','This is simple a test','https://www.cookipedia.co.uk/wiki/images/c/c2/Boiled_rice.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
