import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
// for Navigation bar
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
// for Buttons
import {MatDividerModule} from '@angular/material/divider';
import { HomeComponent } from './MyComponents/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchbarComponent } from './MyComponents/searchbar/searchbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DetailComponent } from './MyComponents/detail/detail.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { FavoriteComponent } from './MyComponents/favorite/favorite.component';
import { LoginComponent } from './MyComponents/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchbarComponent,
    DetailComponent,
    FooterComponent,
    FavoriteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,MatToolbarModule,HttpClientModule,FormsModule,MatInputModule,MatFormFieldModule,
    BrowserAnimationsModule,MatIconModule,MatDividerModule,MatButtonModule, AppRoutingModule,
    MatProgressSpinnerModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
