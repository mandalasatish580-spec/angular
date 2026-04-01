import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounteventComponent } from './countevent.component';

describe('CounteventComponent', () => {
  let component: CounteventComponent;
  let fixture: ComponentFixture<CounteventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounteventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounteventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
