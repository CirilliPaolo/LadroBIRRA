import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipe: Recipe = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }

  saveRecipe(): void {
    const data = {
      title: this.recipe.title,
      description: this.recipe.description
    };
    this.recipeService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newRecipe(): void {
    this.submitted = false;
    this.recipe = {
      title: '',
      description: '',
      published: false
    };
  }
}