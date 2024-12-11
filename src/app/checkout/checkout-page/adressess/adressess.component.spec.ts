import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressessComponent } from './adressess.component';

describe('AdressessComponent', () => {
  let component: AdressessComponent;
  let fixture: ComponentFixture<AdressessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdressessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
