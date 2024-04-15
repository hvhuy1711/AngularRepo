import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticeDetailComponent } from './artice-detail.component';

describe('ArticeDetailComponent', () => {
  let component: ArticeDetailComponent;
  let fixture: ComponentFixture<ArticeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticeDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
