import { Component } from '@angular/core'
@Component({
  selector: 'app-user',
template: `
  <input type="text" [(ngModel)]="name">
<p>Hello, {{ name }}</p>
    <p>I am the user component</p>

  `
})
export class
UserComponent {
  name = "Brandon";

  

  onUserInput(event) {
    this.name = event.target.value;
  }

}
