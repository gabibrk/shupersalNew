import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../checkout/Dto/adress.dto';

@Injectable({
  providedIn: 'root',
})
export class HttpApiCallService {
  private apiUrl = 'https://du-mock-checkout-7d42d0a76fbf.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getCheckoutCart(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cart`);
  }

  getUserAddress(): Observable<any> {
    return this.http.get(`${this.apiUrl}/address`);
  }

  setNewUserAdress(address: Address): Observable<any> {
    return this.http.post(`${this.apiUrl}/address`, address);
  }

  selectShippingAddress(id:string) : Observable<any> {
    return this.http.put(`${this.apiUrl}/address/select/${id}`, null);
  }
  
  
}
