import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationComponent } from './operation.component';

describe('OperationComponent', () => {
  let component: OperationComponent;
  let fixture: ComponentFixture<OperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if function onButtonClick is working', () =>{
    const compiled = fixture.debugElement.nativeElement;
    let functionSpy = spyOn(component, "onButtonClick").and.callThrough();
    let button = compiled.querySelector('#btn1');
    button.click();
    fixture.detectChanges();
    expect(functionSpy).toHaveBeenCalled();
    
  });

  it('should check if correct value (1 +) is the result when button 1 is clicked', () =>{
    const compiled = fixture.debugElement.nativeElement;
    let functionSpy = spyOn(component, "onButtonClick").and.callThrough();
    let button = compiled.querySelector('#btn1');
    button.click();
    fixture.detectChanges();
    expect(functionSpy).toHaveBeenCalled();
    expect(component.onButtonClick).toHaveBeenCalledWith(1);
  });
  it('should check if correct value (2 -) is the result when button 2 is clicked', () =>{
    const compiled = fixture.debugElement.nativeElement;
    let functionSpy = spyOn(component, "onButtonClick").and.callThrough();
    let button = compiled.querySelector('#btn2');
    button.click();
    fixture.detectChanges();
    expect(functionSpy).toHaveBeenCalled();
    expect(component.onButtonClick).toHaveBeenCalledWith(2);
  });
  it('should check if correct value (3 /) is the result when button 3 is clicked', () =>{
    const compiled = fixture.debugElement.nativeElement;
    let functionSpy = spyOn(component, "onButtonClick").and.callThrough();
    let button = compiled.querySelector('#btn3');
    button.click();
    fixture.detectChanges();
    expect(functionSpy).toHaveBeenCalled();
    expect(component.onButtonClick).toHaveBeenCalledWith(3);
  });
  it('should check if correct value (4 *) is the result when button 4 is clicked', () =>{
    const compiled = fixture.debugElement.nativeElement;
    let functionSpy = spyOn(component, "onButtonClick").and.callThrough();
    let button = compiled.querySelector('#btn4');
    button.click();
    fixture.detectChanges();
    expect(functionSpy).toHaveBeenCalled();
    expect(component.onButtonClick).toHaveBeenCalledWith(4);
  });
});
