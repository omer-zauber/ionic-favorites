import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string; quotes: Quote[]; icon: string };

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService
  ) {}

  // ionViewDidLoad() {
  //    this.quoteGroup = this.navParams.data;
  //   // must use the elvis operator (?) to use this aproach
  //   console.log(this.quoteGroup);
  // }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go head',
          handler: () => this.quotesService.addQuoteToFavorites(selectedQuote)
        },
        {
          role: 'cancel',
          text: "No, i've changed my mind",
          handler: () => console.log('No')
        }
      ]
    });

    alert.present();
  }

  onRemoveFavorite(quote: Quote) {
    this.quotesService.removeQuoteToFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }
}
