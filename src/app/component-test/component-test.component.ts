import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrl: './component-test.component.css'
})
export class ComponentTestComponent {
  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['./app-component-home']);
  }
}
