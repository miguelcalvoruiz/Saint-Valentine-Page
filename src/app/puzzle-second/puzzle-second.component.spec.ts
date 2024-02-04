import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleSecondComponent } from './puzzle-second.component';

describe('PuzzleSecondComponent', () => {
  let component: PuzzleSecondComponent;
  let fixture: ComponentFixture<PuzzleSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
