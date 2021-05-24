import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-eligibilty-calculator',
  templateUrl: './eligibilty-calculator.component.html',
  styleUrls: ['./eligibilty-calculator.component.css']
})
export class EligibiltyCalculatorComponent implements OnInit {

  autoTicks :boolean = true;
  disabled :boolean = false;
  invert :boolean = false;
  max :Number= 1000000;
  min :Number= 100000;
  showTicks :boolean = false;
  step = 1;
  thumbLabel :boolean = false;
  monthlyIncomeValue : number|null = 0;
  monthlyExpensesValue : number|null = 0;
  vertical :boolean= false;
  tickInterval = 1;
  emiForm=new FormGroup({
    monthlyIncomeValue:new FormControl(''),
    monthlyExpensesValue:new FormControl(''),
    repaymentTenure:new FormControl(''),
    existingLoan:new FormControl(false),
    existingLoanAmount:new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }
   
  getMoney(){
    console.log(this.emiForm.value)
  }
  updateMonthlyIncomeValue(value:MatSliderChange) {
    this.monthlyIncomeValue =value.value
    this.emiForm.patchValue({
      monthlyIncomeValue:value.value
    })
  }

  updateMonthlyExpensesValue(value:MatSliderChange) {
    this.monthlyExpensesValue=value.value
    this.emiForm.patchValue({
      monthlyExpensesValue:value.value
    })
  }
  
}
