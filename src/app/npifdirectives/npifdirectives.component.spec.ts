import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpifdirectivesComponent } from './npifdirectives.component';

describe('NpifdirectivesComponent', () => {
  let component: NpifdirectivesComponent;
  let fixture: ComponentFixture<NpifdirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NpifdirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NpifdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
