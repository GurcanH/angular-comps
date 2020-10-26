import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placholder',
  templateUrl: './placholder.component.html',
  styleUrls: ['./placholder.component.css'],
})
export class PlacholderComponent implements OnInit {
  @Input() header = true;
  @Input() lines = 3;

  constructor() {}

  ngOnInit(): void {}
}
