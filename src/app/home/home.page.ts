import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public src = 'assets/img/defcard.png';

  constructor() {}

  checkCard(event) {
    console.log('event',event.detail.value)
    const inputChar = String(event.detail.value);
    const pattern = {
      visa : /^4/,
      master : /^5[1-5]/,
      amex:/^3[47]/,
      dinersclub:/^3(?:0[0-5]|[68][0-9])/,
      discover:/^6(?:011|5[0-9]{2})/,
      jcb:/^(?:2131|1800|35\d{3})/
    }
    if(event.detail.value.length > 2) {
      console.log('inputChar', typeof event.detail.value);
      console.log('pattern', pattern.visa.test(inputChar))
      if (pattern.visa.test(inputChar)) {
        console.log('visa');
        this.src = 'assets/img/visa.png';
      } else if(pattern.master.test(inputChar)) {
        console.log('master');
        this.src = 'assets/img/master.png';
      }else if(pattern.amex.test(inputChar)) {
        console.log('amex');
        this.src = 'assets/img/amex.png';
      }else if(pattern.dinersclub.test(inputChar)) {
        console.log('dinersclub');
        this.src = 'assets/img/diners.png';
      }else if(pattern.discover.test(inputChar)) {
        console.log('discover');
        this.src = 'assets/img/discover.png';
      }else if(pattern.jcb.test(inputChar)) {
        console.log('jcb');
        this.src = 'assets/img/jcb.png';
      }
       else {
        console.log('else if ');
        this.src = 'assets/img/defcard.png';
      }
    } else {
      console.log('else')
    }
  }

  public _keyPress(event: any): void {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
