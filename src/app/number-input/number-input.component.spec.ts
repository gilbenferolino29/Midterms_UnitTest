import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputComponent } from './number-input.component';

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if the label for the first number exists', () =>{
    const compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelector('#labelFirst').textContent!).toContain('First Number');
  });

  it('should check if the label for the second number exists', () =>{
    const compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelector('#labelSecond').textContent!).toContain('Second Number');
  });


  it('should check if numberInput function is called whenever 1st number is being inputted', ()=>{
    const compiled = fixture.debugElement.nativeElement;
    let functionSpy = spyOn(component, "numberInput").and.callThrough();
    let input = compiled.querySelector('#first');
    input.value = 10;
    input.dispatchEvent(new Event('input'));
    expect(functionSpy).toHaveBeenCalled();
  });
});
