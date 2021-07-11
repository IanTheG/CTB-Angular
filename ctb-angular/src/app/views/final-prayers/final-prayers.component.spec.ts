import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalPrayersComponent } from './final-prayers.component';

describe('FinalPrayersComponent', () => {
  let component: FinalPrayersComponent;
  let fixture: ComponentFixture<FinalPrayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalPrayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalPrayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
