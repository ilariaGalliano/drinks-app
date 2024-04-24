import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DrinksService } from './../services/drinks.service';
import { Component, OnInit, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  InfiniteScrollCustomEvent,
  IonBadge,
  IonLabel,
  IonAvatar,
  IonItem,
  IonList,
  IonLoading,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonSkeletonText,
  IonAlert,
} from '@ionic/angular/standalone';
import { DatePipe, JsonPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonLabel,
    IonBadge,
    IonAvatar,
    IonItem,
    IonList,
    IonLoading,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonSkeletonText,
    IonAlert,
    DatePipe,
    RouterModule,],
})
export class HomePage implements OnInit{
  constructor(private http: HttpClient) {}

  private drinkServ = inject(DrinksService);

  public title: any[] = [];

  private currentPage = 1;
  public isLoading = true;
  public error = null;
  
  public imageBaseUrl = 'https://apipics.s3.amazonaws.com/coctails_api/';

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    this.error = null;

    // Only show loading indicator on initial load
    if (!event) {
      this.isLoading = true;
    }

			this.drinkServ.getDrinksList().subscribe(data => {
        console.log(data);
        this.title.push(...data);


          // Resolve the infinite scroll promise
          event?.target.complete();

          // Disable the infinite scroll when we reach the end of the list
          if (event) {
            event.target.disabled = data.total_pages === this.currentPage;
          }
        })};

  // This method is called by the infinite scroll event handler
  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }
}
