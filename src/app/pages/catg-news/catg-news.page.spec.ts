import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatgNewsPage } from './catg-news.page';

describe('CatgNewsPage', () => {
  let component: CatgNewsPage;
  let fixture: ComponentFixture<CatgNewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CatgNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
