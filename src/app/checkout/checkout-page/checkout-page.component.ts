import { Component, OnInit } from '@angular/core';
import { HttpApiCallService } from 'src/app/services/http-api-call.service';
import { OrderDTO } from '../Dto/checkout.dto';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  orderData: OrderDTO | undefined
  constructor(private apiService: HttpApiCallService) { }
  showDiv = false
  ngOnInit(): void {
    this.fetchItems();

  }

  fetchItems(): void {
    this.apiService.getCheckoutCart().subscribe({
      next: (data: OrderDTO) => {
        console.log("data arrived from mock server : ", data)
        this.orderData = data;
        console.log('Checkout items fetched:', data);
      },
      error: (err) => {
        console.error('Error fetching checkout items:', err);
      },
    });
  }

  continue() {
    console.log("div", this.showDiv)
    this.showDiv = !this.showDiv
  }



}
