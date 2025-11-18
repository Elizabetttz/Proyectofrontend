import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards1 } from './cards1';

describe('Cards1', () => {
  let component: Cards1;
  let fixture: ComponentFixture<Cards1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cards1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
