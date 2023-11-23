import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LInComponent } from './l-in.component';

describe('LInComponent', () => {
  let component: LInComponent;
  let fixture: ComponentFixture<LInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
