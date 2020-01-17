import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DeliveryOption} from '../models/delivery-option.model';
import {Observable} from 'rxjs';

@Injectable()
export class DeliveryOptionsDataService {
  public API_URI = './assets/delivery-options.json';

  public constructor(private http: HttpClient) {
  }

  public getAllDeliveryOption(): Observable<DeliveryOption[]> {
    return this.http.get<DeliveryOption[]>(this.API_URI);
  }
}
