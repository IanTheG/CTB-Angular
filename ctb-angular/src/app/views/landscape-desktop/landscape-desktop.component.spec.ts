import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeDesktopComponent } from './landscape-desktop.component';

describe('LandscapeDesktopComponent', () => {
  let component: LandscapeDesktopComponent;
  let fixture: ComponentFixture<LandscapeDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandscapeDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapeDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
