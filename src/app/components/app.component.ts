import { Component, VERSION } from '@angular/core';
//    <!--hello name="{{ name }}"></hello-->

@Component({
  selector: 'my-app',
  template: `
    <p>Start editing to see some magic happen 2 :)</p>
  `,
  //styleUrls: ['./style/app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
