import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayobjComponent } from './arrayobj.component';

describe('ArrayobjComponent', () => {
  let component: ArrayobjComponent;
  let fixture: ComponentFixture<ArrayobjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrayobjComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
