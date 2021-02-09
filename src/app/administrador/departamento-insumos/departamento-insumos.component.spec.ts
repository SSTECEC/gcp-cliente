import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoInsumosComponent } from './departamento-insumos.component';

describe('DepartamentoInsumosComponent', () => {
  let component: DepartamentoInsumosComponent;
  let fixture: ComponentFixture<DepartamentoInsumosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoInsumosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
