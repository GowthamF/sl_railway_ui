import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAddtionalDataComponent } from './schedule-addtional-data.component';

describe('ScheduleAddtionalDataComponent', () => {
  let component: ScheduleAddtionalDataComponent;
  let fixture: ComponentFixture<ScheduleAddtionalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleAddtionalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleAddtionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
