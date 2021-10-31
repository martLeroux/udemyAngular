import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipesServices: RecipeService) {

  }

  storeRecipes() {
    const recipes = this.recipesServices.getRecipes();
    this.http.put('https://ng-course-recipe-book-27ea0-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://ng-course-recipe-book-27ea0-default-rtdb.firebaseio.com/recipes.json').subscribe(recipes => {
      this.recipesServices.setRecipes(recipes);
    })
  }
}