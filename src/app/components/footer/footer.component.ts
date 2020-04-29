import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public fecha:number = new Date().getFullYear();
  public nombre:string = 'SandovalJr'
}
