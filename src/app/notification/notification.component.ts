import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template:`<div class="notification-div" [ngClass]="{fadeOut:displaynotification}">
    cookies are need to the work this website properly
    <div class="close"><button class="btn" (click)="closenotification()">X</button></div>
    </div>`,
  styles: [".notification-div{margin: 10px 0px;padding:10px 20px; background-color:#FAD7A0;text-align:center;}",
  "p{font-size:14px;}",".close{float:right;margin-top:-15px}",
".fadeOut{visibility:hidden;opacity:0s;transition: visibility 0s 2s;opacity: 2s linear;}"]
})
export class NotificationComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  displaynotification: boolean= false;
  closenotification()
  {
    this.displaynotification=true;
  }
}
