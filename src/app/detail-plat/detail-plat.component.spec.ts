import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlatComponent } from './detail-plat.component';

describe('DetailPlatComponent', () => {
  let component: DetailPlatComponent;
  let fixture: ComponentFixture<DetailPlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
