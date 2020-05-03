import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  inputs: ['title', 'back'],
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {}

}
