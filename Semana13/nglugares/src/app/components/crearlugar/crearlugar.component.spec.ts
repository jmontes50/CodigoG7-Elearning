import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearlugarComponent } from './crearlugar.component';

describe('CrearlugarComponent', () => {
  let component: CrearlugarComponent;
  let fixture: ComponentFixture<CrearlugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearlugarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearlugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
