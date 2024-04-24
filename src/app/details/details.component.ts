import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { cashOutline, calendarOutline, arrowBackOutline} from 'ionicons/icons';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DrinksService } from '../services/drinks.service';
import { DrinkResult } from '../interfaces/drink-interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  standalone: true,
  styleUrls: ['./details.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailsComponent implements OnInit {

  
  // Services
  private router = inject(Router);
  private http = inject(HttpClient);
  private drinkServ = inject(DrinksService)

  constructor() {
    // icons
    addIcons({
      cashOutline,
      calendarOutline,
      arrowBackOutline
    });
  }

  // movie = signal<MovieResult | null>;
  // public drink: WritableSignal<DrinkResult | null> = signal<DrinkResult | null>(null);
  public drink!: DrinkResult;
  public imageBaseUrl = 'https://apipics.s3.amazonaws.com/coctails_api/';

   // Load the movie details when the id changes through the URL :id parameter

   ngOnInit(){
    this.test("7");
   }
  test(drinkId: string) {
    this.drinkServ.getDrinkDetails(drinkId).subscribe(drink => {
      console.log('movie', drink);
      this.drink = drink;
      console.log('dd', drink.title);
    })
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}

