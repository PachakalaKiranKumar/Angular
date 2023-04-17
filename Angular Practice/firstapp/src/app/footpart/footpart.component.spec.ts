import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootpartComponent } from './footpart.component';

describe('FootpartComponent', () => {
  let component: FootpartComponent;
  let fixture: ComponentFixture<FootpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
