import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-buider-typed-form',
  templateUrl: './form-buider-typed-form.component.html',
  styleUrls: ['./form-buider-typed-form.component.scss']
})
export class FormBuiderTypedFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  login = this.formBuilder.group<Class1Dto>(new Class1Dto());
  
  ngOnInit(): void {
  }

}

class Class1Dto {
  public email: string = '';
  public password: string = '';
}
