import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpApiCallService } from 'src/app/services/http-api-call.service';
import { Address } from '../../Dto/adress.dto';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  addressForm!: FormGroup;
  @Output() newAddressLine = new EventEmitter<Address>();
  constructor(private fb: FormBuilder, private apiService: HttpApiCallService) { }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      addressLine1: ['', [Validators.required, Validators.maxLength(100)]],
      addressLine2: ['', Validators.maxLength(100)],
      city: ['', [Validators.required, Validators.maxLength(50)]],
      state: ['', [Validators.required, Validators.maxLength(50)]],
      zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      country: ['', [Validators.required, Validators.maxLength(50)]],
      saved: [true]
    });
  }

  get f() {
    return this.addressForm.controls;
  }



  onSubmit(): void {
    if (this.addressForm.valid) {
      console.log('Form Submitted', this.addressForm.value);
      this.apiService.setNewUserAdress(this.addressForm.value).subscribe(res => {
        console.log(res)
        this.newAddressLine.emit(res)
      })
    } else {
      console.log('Form not valid');
    }
  }
}
