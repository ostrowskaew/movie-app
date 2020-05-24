import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenereComponent } from './add-genere.component';

describe('AddGenereComponent', () => {
  let component: AddGenereComponent;
  let fixture: ComponentFixture<AddGenereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGenereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGenereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
