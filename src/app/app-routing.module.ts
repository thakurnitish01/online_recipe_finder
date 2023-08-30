import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { SearchbarComponent } from './MyComponents/searchbar/searchbar.component';
import { DetailComponent } from './MyComponents/detail/detail.component';
import { FavoriteComponent } from './MyComponents/favorite/favorite.component';

const routes: Routes = [
  {
    path: '',
    component: SearchbarComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
