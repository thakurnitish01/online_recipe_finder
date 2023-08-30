import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favorites: any[] = [];

  addToFavorites(item: any) {
    if (!this.isFavorite(item)) {
      this.favorites.push(item);
    }
  }
  getFavorites() {
    return this.favorites;
  }


  removeFromFavorites(item: any) {
    const index = this.favorites.findIndex(favorite => favorite.id === item.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }

  isFavorite(item: any): boolean {
    return this.favorites.some(favorite => favorite.id === item.id);
  }
}
