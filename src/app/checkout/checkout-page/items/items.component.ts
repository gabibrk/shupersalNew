import { Component, Input } from '@angular/core';
import { Item } from '../../Dto/checkout.dto';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  @Input() items:Item[]=[]


}
