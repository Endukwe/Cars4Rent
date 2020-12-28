import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Project-card',
  templateUrl: './Project-card.component.html',
  styleUrls: ['./Project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  Property: any = {
    "Id":1,
    "Name":"Toyota Camry 2008",
    "Type":"Sedan",
    "Price":"3000/24hrs"


  }

  constructor() { }

  ngOnInit() {
  }

}
