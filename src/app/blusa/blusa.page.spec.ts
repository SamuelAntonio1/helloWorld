import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlusaPage } from './blusa.page';

describe('BlusaPage', () => {
  let component: BlusaPage;
  let fixture: ComponentFixture<BlusaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlusaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
