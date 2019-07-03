import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
  inputTextForm: FormGroup;
  outputTextForm: FormGroup;

  selectedLanguage = 'Sinhala';
  languages = ['Sinhala', 'Tamil', 'English'];

  constructor() {
    this.inputTextForm = new FormGroup({
      inputText: new FormControl('')
    })

    this.outputTextForm = new FormGroup({
      outputText: new FormControl()
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.inputTextForm.value);
  }

}
