import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() clicked: EventEmitter<boolean>;

  constructor() {
    this.clicked = new EventEmitter<boolean>();
  }

  ngOnInit() {}
}
