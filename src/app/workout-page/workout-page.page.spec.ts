import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkoutPagePage } from './workout-page.page';

describe('WorkoutPagePage', () => {
  let component: WorkoutPagePage;
  let fixture: ComponentFixture<WorkoutPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
