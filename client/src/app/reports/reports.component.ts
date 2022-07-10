import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Client } from 'src/app/models/client.interface';
import { Doctor } from '../models/doctor.interface';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  
  @Input() rtl: boolean = false;

  @Input() textManager: any;

  @Input() loggedInUser!: Doctor;

  @Input() client!: Client;

  @Input() disabled: boolean = false;

  @Input() form!: FormGroup;

  @Output() back: EventEmitter<void> = new EventEmitter();

  @Output() continue: EventEmitter<void> = new EventEmitter();

  @Output() reset: EventEmitter<void> = new EventEmitter();

  constructor( 
  ) {}

  ngOnInit(): void {
  }

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