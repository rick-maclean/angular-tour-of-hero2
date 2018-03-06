import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesOldComponent } from './heroes-old.component';

describe('HeroesOldComponent', () => {
  let component: HeroesOldComponent;
  let fixture: ComponentFixture<HeroesOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
