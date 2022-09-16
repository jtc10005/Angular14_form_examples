import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manual-typed-form',
  templateUrl: './manual-typed-form.component.html',
  styleUrls: ['./manual-typed-form.component.scss']
})
export class ManualTypedFormComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
