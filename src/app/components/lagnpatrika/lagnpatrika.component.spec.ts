import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagnpatrikaComponent } from './lagnpatrika.component';

describe('LagnpatrikaComponent', () => {
  let component: LagnpatrikaComponent;
  let fixture: ComponentFixture<LagnpatrikaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LagnpatrikaComponent]
    });
    fixture = TestBed.createComponent(LagnpatrikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
