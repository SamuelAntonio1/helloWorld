import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TenisPage } from './tenis.page';

describe('TenisPage', () => {
  let component: TenisPage;
  let fixture: ComponentFixture<TenisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TenisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
