import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NewsFeed } from '../models/news-feed';

@Injectable()
export class NewsFeedService {

    private apiURL = "http://localhost:8080";

    constructor(private http: HttpClient) {

    }

    getNewsFeed(): Observable<NewsFeed[]> {
        return this.http.get<NewsFeed[]>(this.apiURL + "/news");
    }

    searchNews(parameters) : Observable<NewsFeed[]> {
        return this.http.post<NewsFeed[]>(this.apiURL + "/search", parameters);
    }
}
