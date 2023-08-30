import {Component, OnInit} from '@angular/core';
import {FavoriteService} from 'src/app/services/favorite.service';

@Component({selector: 'app-favorite', templateUrl: './favorite.component.html', styleUrls: ['./favorite.component.css']})
export class FavoriteComponent implements OnInit {
    favorites : any[] = [];

    constructor(private favoriteService : FavoriteService) {}

    ngOnInit() {
        this.favorites = this
            .favoriteService
            .getFavorites();
    }

    removeFromFavorites(item : any) {
        this
            .favoriteService
            .removeFromFavorites(item);
        this.favorites = this
            .favoriteService
            .getFavorites();
    }
}
