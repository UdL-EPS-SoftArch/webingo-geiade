import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {RestService} from 'angular4-hal-aot';
import {Card} from './card';


@Injectable()
export class CardService extends RestService<Card> {

  constructor(injector: Injector) {
    super(Card, 'cards', injector);
  }

  public findByPlayerContaining(text: string): Observable<Card[]> {
    const options: any = {params: [{key: 'text', value: text}]};
    return this.search('findByPlayerContaining', options);
  }
}
