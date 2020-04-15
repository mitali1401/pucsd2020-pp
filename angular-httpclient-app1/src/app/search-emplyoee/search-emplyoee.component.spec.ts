import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmplyoeeComponent } from './search-emplyoee.component';

describe('SearchEmplyoeeComponent', () => {
  let component: SearchEmplyoeeComponent;
  let fixture: ComponentFixture<SearchEmplyoeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEmplyoeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmplyoeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
