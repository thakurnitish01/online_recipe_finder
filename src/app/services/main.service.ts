import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MainService {

    // URl of API that are provided in Given Test
    private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

    // constructor Contain the private http access modifier that conatin the
    // properties of HTTP Module Library
    constructor(private http : HttpClient) {}

    // Search The recipies from the Given API
    searchRecipes(recipeName : string) {
        const url = `${this.baseUrl}/search.php?s=${recipeName}`;
        return this
            .http
            .get(url);
    }

    getRecipeDetails(recipeId : string) {
        const url = `${this.baseUrl}/lookup.php?i=${recipeId}`;
        return this.http.get(url);
    }
    setApiData(data : any) {
        this.baseUrl = data;
    }

    getApiData() {
        return this.baseUrl;
    }
}