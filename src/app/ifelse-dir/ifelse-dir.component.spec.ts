import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelseDirComponent } from './ifelse-dir.component';

describe('IfelseDirComponent', () => {
  let component: IfelseDirComponent;
  let fixture: ComponentFixture<IfelseDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IfelseDirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfelseDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
