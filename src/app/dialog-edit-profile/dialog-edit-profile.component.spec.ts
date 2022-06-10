import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { DialogEditProfileComponent } from './dialog-edit-profile.component';

describe('DialogEditProfileComponent', () => {
  let component: DialogEditProfileComponent;
  let fixture: ComponentFixture<DialogEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AngularFireModule.initializeApp(environment.firebase)],
      declarations: [DialogEditProfileComponent],
      providers:[	{ provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
