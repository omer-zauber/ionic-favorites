import { Quote } from '../data/quote.interface';

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  removeQuoteToFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex(
      (quoteEl: Quote) => quoteEl.id === quote.id
    );
    this.favoriteQuotes.splice(position, 1);
  }

  getQuoteToFavorites() {
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote) {
    return this.favoriteQuotes.find(
      (quoteEl: Quote) => quoteEl.id === quote.id
    );
  }
}
