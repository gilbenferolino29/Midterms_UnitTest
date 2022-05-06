import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;

    component.receive = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if h1 for result is displaying correctly', ()=>{
    const compiled = fixture.debugElement.nativeElement;
    let functionSpy = spyOn(component, "compute").and.callThrough();
    component.receive = {first: 1, second:1, op: 1, };
    component.ngOnChanges();
    fixture.detectChanges();
    expect(functionSpy).toHaveBeenCalled;
    
    expect(compiled.querySelector('h1').textContent!).toContain(component.result);
  })
  it('should check if compute function is working properly', () => {
    let functionSpy = spyOn(component, "compute").and.callThrough();
    component.compute();
    fixture.detectChanges();
    expect(functionSpy).toHaveBeenCalled();


  });

  it('should check if compute on ngOnInit is being called', ()  =>{
    let functionSpy = spyOn(component, "compute").and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(functionSpy).toHaveBeenCalled();
  });

  it('should check if compute on ngOnChanges is being called', ()  =>{
    let functionSpy = spyOn(component, "compute").and.callThrough();
    component.ngOnChanges();
    fixture.detectChanges();
    expect(functionSpy).toHaveBeenCalled();
  });

  it('should check if result in compute function is 2 in case 1 (1+1)', ()=>{
    const compiled = fixture.debugElement.nativeElement;
    let functionSpy = spyOn(component, "compute").and.callThrough();
    component.receive = {first: 1, second:1, op: 1, };
    component.compute();
    expect(functionSpy).toHaveBeenCalled();
    expect(component.result).toBe(2);
  });
  it('should check if result in compute function is 0 in case 2 (1-1)', ()=>{
    const compiled = fixture.debugElement.nativeElement;
    let functionSpy = spyOn(component, "compute").and.callThrough();
    component.receive = {first: 1, second:1, op: 2, };
    component.compute();
    expect(functionSpy).toHaveBeenCalled();
    expect(component.result).toBe(0);
  });

  it('should check if result in compute function is 2 in case 3 (4/2)', ()=>{
    const compiled = fixture.debugElement.nativeElement;
    let functionSpy = spyOn(component, "compute").and.callThrough();
    component.receive = {first: 4, second:2, op: 3, };
    component.compute();
    expect(functionSpy).toHaveBeenCalled();
    expect(component.result).toBe(2);
  });
  it('should check if result in compute function is 16 in case 4 (8*2)', ()=>{
    const compiled = fixture.debugElement.nativeElement;
    let functionSpy = spyOn(component, "compute").and.callThrough();
    component.receive = {first: 8, second:2, op: 4, };
    component.compute();
    expect(functionSpy).toHaveBeenCalled();
    expect(component.result).toBe(16);
  });
});
