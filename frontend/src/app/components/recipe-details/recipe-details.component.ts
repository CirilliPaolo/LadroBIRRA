import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentRecipe: Recipe = {
    title: '',
    description: '',
    published: false
  };

  message = '';
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getRecipe(this.route.snapshot.params["id"]);
    }
  }
  getRecipe(id: string): void {
    this.recipeService.get(id)
      .subscribe({
        next: (data) => {
          this.currentRecipe = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updatePublished(status: boolean): void {
    const data = {
      title: this.currentRecipe.title,
      description: this.currentRecipe.description,
      published: status
    };
    this.message = '';
    this.recipeService.update(this.currentRecipe.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentRecipe.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  updateRecipe(): void {
    this.message = '';
    this.recipeService.update(this.currentRecipe.id, this.currentRecipe)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This recipe was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteRecipe(): void {
    this.recipeService.delete(this.currentRecipe.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/recipes']);
        },
        error: (e) => console.error(e)
      });
  }
}