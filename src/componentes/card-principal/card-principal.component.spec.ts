import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrincipalComponent } from './card-principal.component';

describe('CardPrincipalComponent', () => {
  let component: CardPrincipalComponent;
  let fixture: ComponentFixture<CardPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
