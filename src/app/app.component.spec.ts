import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let rsComponent: ResultComponent;
  let rsFixture: ComponentFixture<ResultComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    rsFixture = TestBed.createComponent(ResultComponent);
    rsComponent = rsFixture.componentInstance;

    
    fixture.detectChanges();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should check if receiveFromInput is being called and 1st and 2nd number to be 1 and 2, respectively.', () => {
    let received1 = {value: 1, which: 0}
    let received2 = {value: 2, which: 1}
    let functionSpy = spyOn(component, "receiveFromInput").and.callThrough();
    component.receiveFromInput(received1);
    component.receiveFromInput(received2);
    fixture.detectChanges();
    expect(functionSpy).toHaveBeenCalled();
    expect(component.firstNumber).toBe(1);
    expect(component.secondNumber).toBe(2);
  })
  it('should check if sendValue is being called and working', () =>{
    let op = 1;
    let received1 = {value: 1, which: 0}
    let received2 = {value: 2, which: 1}
    let functionSpy = spyOn(component, "sendValue").and.callThrough();
    component.receiveFromInput(received1);
    component.receiveFromInput(received2);
    component.receiveOperation(op);
    component.sendValue();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      console.log(rsComponent.receive);
      rsComponent.ngOnInit(); 
      rsFixture.detectChanges(); 
      rsFixture.whenStable().then(()=>{

      expect(functionSpy).toHaveBeenCalled();
      console.log(rsComponent.receive);
      expect(rsComponent.receive).toEqual(component.value);});})
    
    
  })
  it('should check if receiveOperation is being called', () =>{
    let op = 1;
    let functionSpy = spyOn(component, "receiveOperation").and.callThrough();
    component.receiveOperation(op);
    fixture.detectChanges();
    expect(functionSpy).toHaveBeenCalled();
  })
});
