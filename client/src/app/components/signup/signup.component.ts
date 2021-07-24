import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Join | Deviant Art");
   }

  ngOnInit(): void {
  }

}
