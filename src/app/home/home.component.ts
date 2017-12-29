import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../services/news-feed.service';
import { NewsFeed } from '../models/news-feed';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private newsService: NewsFeedService) { }

  newsFeed: NewsFeed[]

  ngOnInit() {
    this.getNewsFeed();
  }

  getNewsFeed() {
    this.newsService
      .getNewsFeed()
      .subscribe(news => {
        this.newsFeed = news
        console.log(news);
      });
  }
}
