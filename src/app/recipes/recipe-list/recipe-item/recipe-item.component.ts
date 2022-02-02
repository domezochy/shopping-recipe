import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() item = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
