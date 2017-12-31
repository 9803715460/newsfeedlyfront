import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../services/news-feed.service';
import { NewsFeed } from '../models/news-feed';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  newsFeed: NewsFeed[];

  newsSources = [
    { name: "ABC NEWS", value: "abc-news", checked: false },
    { name: "BBC NEWS", value: "bbc-news", checked: false },
    { name: "BBC Sport", value: "bbc-sport", checked: false },
    { name: "ESPN", value: "ESPN", checked: false },
    { name: "Business Insider", value: "business-insider", checked: false },
    { name: "Buzzfeed", value: "buzzfeed", checked: false },
    { name: "CNBC", value: "cnbc", checked: false },
    { name: "CNN", value: "cnn", checked: false }
  ];

  constructor(private newsService: NewsFeedService) { }

  ngOnInit() {

  }

  getNews(value) {
    let selectedSources = this.getSelectedOptions();

    let parameters = {
      keyword: value,
      sources: selectedSources
    };

    this.newsService.searchNews(parameters)
        .subscribe(newsfeed => {
          this.newsFeed = newsfeed;
        });
  }

  getSelectedOptions() {
    return this.newsSources.filter(source => source.checked).map(source => source.value);
  }

}
