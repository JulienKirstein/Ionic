import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCategoriePage } from './create-categorie.page';

describe('CreateCategoriePage', () => {
  let component: CreateCategoriePage;
  let fixture: ComponentFixture<CreateCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
