import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MainService} from 'src/app/services/main.service';
import {FavoriteService} from 'src/app/services/favorite.service';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit {
    searchTerm !: string;
    showNotFound : boolean = false;
    recipes : any[] = [];
    apiData : any;

    constructor(private route : ActivatedRoute, private router : Router, private recipeService : MainService, private favoriteService : FavoriteService) {}

    ngOnInit() {
        this
            .route
            .queryParams
            .subscribe(params => {
                this.searchTerm = params['term'];
                this.searchRecipes(this.searchTerm);
            });
    }
    searchRecipes(searchTerm : string) {
        this.showNotFound = false;
        this
            .recipeService
            .searchRecipes(searchTerm)
            .subscribe((data : any) => {
                this.recipes = data.meals || [];
                if (this.recipes.length === 0) {
                    this.showNotFound = true;
                }
            });
    }

    viewRecipe(recipeId : string) {
        this
            .router
            .navigate(['/detail', recipeId]);

    }

    addToFavorites(item : any) {
        this
            .favoriteService
            .addToFavorites(item);
            alert("Added Sucessfully..!")
    }

    fetchData() {
        this.apiData = "https://www.themealdb.com/api/json/v1/1";

        this
            .recipeService
            .setApiData(this.apiData);
    }
}
