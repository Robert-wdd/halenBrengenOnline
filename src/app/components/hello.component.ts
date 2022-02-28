/*import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  public result: any = [];

  constructor() {
    this.getAllOrdersFromToday();

    console.log('test');
  }

  public async getAllOrdersFromToday(): Promise<void> {
    var requestOptions: any = {
      method: 'GET',
      redirect: 'follow',
    };

    this.result = fetch(
      'https://tinlammysql.tinlam.repl.co/halenbrengen',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const obj = JSON.parse(result);
        console.log(obj);
      })
      .catch((error) => console.log('error', error));
  }
}
*/
