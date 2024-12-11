import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderDTO } from '../../Dto/checkout.dto';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  @Output() openAddressWindow = new EventEmitter<Boolean>();
  @Input() order: OrderDTO | undefined


  openAddress(){
    this.openAddressWindow.emit(true)
  }
}
