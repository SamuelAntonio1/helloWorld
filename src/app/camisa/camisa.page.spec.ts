import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamisaPage } from './camisa.page';

describe('CamisaPage', () => {
  let component: CamisaPage;
  let fixture: ComponentFixture<CamisaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
