import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NewsFeedService } from './services/news-feed.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent
],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NewsFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
