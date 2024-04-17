import {
  Component,
  ElementRef,
  QueryList,
  VERSION,
  Version,
  ViewChild,
  ViewChildren,
  viewChildren,
} from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userInfo = {
    userName: 'tiepphan',
    password: '',
    rememberMe: true,
  };
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;
  usernamePattern = /^[a-z]{6,32}$/i;
  // username: any;

  onSubmit(form: NgForm): void {
    console.log(form);
  }
  title = 'ng-router';

  navs = ['Active', 'link 1', 'link 2'];

  counter = 1;
  showLast = true;

  questions = {
    question1: true,
    question2: false,
  };

  // @ViewChild(ToggleComponent, {static:true}) toggleComp: ToggleComponent | undefined;// dùng khi có 1 cái
  @ViewChildren(ToggleComponent) toggleComps:
    | QueryList<ToggleComponent>
    | undefined;
  @ViewChild('nameInput', { static: true }) nameInput:
    | ElementRef<HTMLInputElement>
    | undefined;

  ngAfterViewInit() {
    // console.log(this.toggleComps);
    this.toggleComps?.changes.subscribe(console.log);
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.nameInput?.nativeElement.focus();
    // }, 3000);//sử dụng khi có ViewChild
    console.log(this.nameInput);
    // console.log("onInit",this.toggleComp);
  }

  isChecked = true;

  // currentProgress = 70;

  name = 'Angular ' + VERSION.major;
  // title = 'projectName';

  isDanger = false;
  isWarning = false;
  classes = 'box red-border yellow-background';

  inputType = 'text';

  user = {
    name: 'Chau',
    age: 18,
  };

  handler() {
    console.log('clicked');
  }

  user1 = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
          lat: '-38.2386',
          lng: '57.2232',
        },
      },
      phone: '024-648-3804',
      website: 'ambrose.net',
      company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
      },
    },
  ];
}
