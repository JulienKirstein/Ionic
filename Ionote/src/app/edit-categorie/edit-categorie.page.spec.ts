import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditCategoriePage } from './edit-categorie.page';

describe('EditCategoriePage', () => {
  let component: EditCategoriePage;
  let fixture: ComponentFixture<EditCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCategoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
