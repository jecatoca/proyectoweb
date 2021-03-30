import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCotizacionComponent } from './gestion-cotizacion.component';

describe('GestionCotizacionComponent', () => {
  let component: GestionCotizacionComponent;
  let fixture: ComponentFixture<GestionCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
