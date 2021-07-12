import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeMobileComponent } from './landscape-mobile.component';

describe('LandscapeMobileComponent', () => {
  let component: LandscapeMobileComponent;
  let fixture: ComponentFixture<LandscapeMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandscapeMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
