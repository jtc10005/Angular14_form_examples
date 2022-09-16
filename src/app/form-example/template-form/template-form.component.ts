import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
})
export class TemplateFormComponent implements OnInit {
  constructor() {}
  model = new Class1Dto();
  ngOnInit(): void {}
}

class Class1Dto {
  public email: string = '';
  public password: string = '';
}
