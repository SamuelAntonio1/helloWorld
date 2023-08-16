import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromocoesPage } from './promocoes.page';

describe('PromocoesPage', () => {
  let component: PromocoesPage;
  let fixture: ComponentFixture<PromocoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PromocoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
