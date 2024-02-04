import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFirstComponent } from './question-first.component';

describe('QuestionFirstComponent', () => {
  let component: QuestionFirstComponent;
  let fixture: ComponentFixture<QuestionFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
