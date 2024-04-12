import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent implements OnInit {
  // @Input() header: string | undefined;
  // @Input() question: string | undefined;
  // @Input() content: string | undefined;
  // @Input() canSkip :boolean | undefined;;
  // @Output() skip = new EventEmitter();
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
