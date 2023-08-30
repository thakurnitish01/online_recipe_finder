    import {Component, OnInit} from '@angular/core';
    import {ActivatedRoute, Router} from '@angular/router';
    import {MainService} from 'src/app/services/main.service';

    @Component({selector: 'app-detail', templateUrl: './detail.component.html', styleUrls: ['./detail.component.css']})
    export class DetailComponent implements OnInit {
        recipeId : string;
        recipe : any;

        constructor(private route : ActivatedRoute, private router : Router, private mainService : MainService) {
            this.recipeId = '';
            this.recipe = null;
        }

        ngOnInit() : void {
            this
                .route
                .params
                .subscribe(params => {
                    this.recipeId = params['id'];
                    this.fetchRecipeDetails(this.recipeId);
                });
        }

        fetchRecipeDetails(recipeId : string) : void {
            this
                .mainService
                .getRecipeDetails(recipeId)
                .subscribe((response : any) => {
                    this.recipe = response.meals[0];
                    this.recipe.ingredients = this.extractIngredients(this.recipe);
                });
        }
        extractIngredients(recipe : any) : string[] {
            const ingredients : string[] = [];
            for (let i = 1; i <= 20; i++) {
                const ingredientKey = `strIngredient${i}`;
                if (recipe[ingredientKey]) {
                    ingredients.push(recipe[ingredientKey]);
                } else {
                    break;
                }
            }
            return ingredients;
        }
    }
