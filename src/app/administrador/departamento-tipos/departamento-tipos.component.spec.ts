import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoTiposComponent } from './departamento-tipos.component';

describe('DepartamentoTiposComponent', () => {
  let component: DepartamentoTiposComponent;
  let fixture: ComponentFixture<DepartamentoTiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoTiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
