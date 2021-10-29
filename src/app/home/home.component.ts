import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gitProfileLink: string = "https://github.com/Svenpire"
  linkedInLink = "https://www.linkedin.com/in/sven-moon/"

  constructor(
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
  }

  public scrollToAnchor(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId)
   }

}
