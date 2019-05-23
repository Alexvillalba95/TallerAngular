import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOwnersComponentComponent } from './list-owners-component.component';

describe('ListOwnersComponentComponent', () => {
  let component: ListOwnersComponentComponent;
  let fixture: ComponentFixture<ListOwnersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOwnersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOwnersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
