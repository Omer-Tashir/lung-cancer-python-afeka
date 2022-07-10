import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Client } from 'src/app/models/client.interface';
import { Doctor } from '../../models/doctor.interface';

@Component({
  selector: 'app-client-question-form1',
  templateUrl: './client-question-form1.component.html',
  styleUrls: ['./client-question-form1.component.scss']
})
export class ClientQuestionForm1Component {

  @Input() rtl: boolean = false;

  @Input() textManager: any;

  @Input() loggedInUser!: Doctor;

  @Input() client!: Client;

  @Input() disabled: boolean = false;

  @Input() disabledClientQuestionForm1: boolean = false;

  @Input() form!: FormGroup;

  @Output() back: EventEmitter<void> = new EventEmitter();

  @Output() continue: EventEmitter<void> = new EventEmitter();

  @Output() reset: EventEmitter<void> = new EventEmitter();

  onBack() {
    this.back.emit();
  }

  onSubmit() {
    this.continue.emit();
  }

  onReset() {
    this.reset.emit();
  }
}