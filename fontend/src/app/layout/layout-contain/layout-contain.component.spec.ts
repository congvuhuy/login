import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutContainComponent } from './layout-contain.component';

describe('LayoutContainComponent', () => {
  let component: LayoutContainComponent;
  let fixture: ComponentFixture<LayoutContainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutContainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
