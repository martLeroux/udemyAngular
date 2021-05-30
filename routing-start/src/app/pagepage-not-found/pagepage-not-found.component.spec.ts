import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagepageNotFoundComponent } from './pagepage-not-found.component';

describe('PagepageNotFoundComponent', () => {
  let component: PagepageNotFoundComponent;
  let fixture: ComponentFixture<PagepageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagepageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagepageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
