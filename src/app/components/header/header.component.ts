import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  rootClassName: string = ''
  @Input()
  heading11: string = 'LIFE IN COLOR'
  @Input()
  heading1: string = 'COLOR'

  showBurgerMenuBoolean = false;

  constructor() {}

  showBurgerMenu() {
    return this.showBurgerMenuBoolean;
  }

  showBurger() {
    this.showBurgerMenuBoolean = true;
  }

  closeBurger() {
    this.showBurgerMenuBoolean = false;
  }
}
