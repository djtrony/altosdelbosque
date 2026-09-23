import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewsPage } from './add-news.page';

describe('AddNewsPage', () => {
  let component: AddNewsPage;
  let fixture: ComponentFixture<AddNewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
