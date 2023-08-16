import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcaPage } from './calca.page';

describe('CalcaPage', () => {
  let component: CalcaPage;
  let fixture: ComponentFixture<CalcaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
