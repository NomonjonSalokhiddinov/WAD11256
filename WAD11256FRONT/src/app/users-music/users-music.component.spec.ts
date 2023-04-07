import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMusicComponent } from './users-music.component';

describe('UsersMusicComponent', () => {
  let component: UsersMusicComponent;
  let fixture: ComponentFixture<UsersMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
