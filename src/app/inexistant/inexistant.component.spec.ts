import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InexistantComponent } from './inexistant.component';

describe('InexistantComponent', () => {
  let component: InexistantComponent;
  let fixture: ComponentFixture<InexistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InexistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InexistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
