import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpApiCallService } from 'src/app/services/http-api-call.service';

@Component({
  selector: 'app-adressess',
  templateUrl: './adressess.component.html',
  styleUrls: ['./adressess.component.scss']
})
export class AdressessComponent implements OnInit {
  selectedAddressId: number | undefined;
  address: any;
  public addNewAddress: boolean = false;
  @Output() closeAddressWindow = new EventEmitter<boolean>();
  @Output() addressUpdated = new EventEmitter<boolean>();
  constructor(private apiService: HttpApiCallService) { }
  ngOnInit(): void {
    this.getAddress();
  }

  closeWindow() {
    console.log("close")
    this.closeAddressWindow.emit(true)
  }
  getAddress() {
    this.apiService.getUserAddress().subscribe({
      next: (data: any) => {
        console.log("data arrived from mock server : ", data)
        this.address = data;
        console.log('Checkout items fetched:', data);
      },
      error: (err) => {
        console.error('Error fetching checkout items:', err);
      },
    });
  }

  addAddressRow(e: any) {
    console.log(e)
    this.address.push(e)
  }

  setSelectedAddress() {
    const selectedAddress = this.address.find((adrs: any) => adrs.id === this.selectedAddressId);
    if (selectedAddress) {
      console.log('Selected Address:', selectedAddress);
      this.apiService.selectShippingAddress(selectedAddress.id).subscribe(res => {
        this.addressUpdated.emit(true)
        console.log(res)
      })
       } else {
      console.log('No address selected');
    }
  }
}
