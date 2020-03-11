import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("a test recipe", "simply descripton", "https://cooking.nytimes.com/recipes/1014832-pasta-alla-norma")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
