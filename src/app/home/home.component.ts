import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../services/news-feed.service';
import { NewsFeed } from '../models/news-feed';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private newsService: NewsFeedService) { }

  newsFeed: Observable<NewsFeed[]>;
  selectedNews:NewsFeed;

  ngOnInit() {
    this.getNewsFeed();
  }

  getNewsFeed() {
    this.newsFeed = this.newsService.getNewsFeed();
  }
  
  onSelect(item: NewsFeed): void {
    this.selectedNews = item;
  }
}


