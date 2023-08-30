import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

interface Meal {
  strMealThumb: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  idMeal:string;
}

interface ApiResponse {
  meals: Meal[];
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit{
  searchTerm: string = '';
  apiData: Meal[] = [];

  constructor(private router: Router, private mainService: MainService, private http : HttpClient) {}

  ngOnInit(): void {
    this.getAPI();
  }
  
  search() {
    this.router.navigate(['/home'], { queryParams: { term: this.searchTerm } });
  }
  getAPI() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.searchTerm;

    this.http.get<ApiResponse>(apiUrl).subscribe(
      (response) => {
        this.apiData = response.meals;
      },
      (error) => {
        console.error('API request failed:', error);
      }
    );
    }
    viewRecipe(recipeId: string) {
      this.router.navigate(['/detail', recipeId]);
     
    }


}
