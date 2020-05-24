import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereListComponent } from './genere-list.component';

describe('GenereListComponent', () => {
  let component: GenereListComponent;
  let fixture: ComponentFixture<GenereListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenereListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
