import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../../shared/modules/material.module';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    window.history.pushState({ mockData: ''}, '');
    fixture.detectChanges();
  });

  it('should create WelcomeComponent', () => {
    expect(component).toBeTruthy();
  });
});
