import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-principal',
  templateUrl: './card-principal.component.html',
  styleUrls: ['./card-principal.component.css']
})
export class CardPrincipalComponent implements OnInit {

  constructor() { }

  title = 'pdf-test';
  pdfSrc = "https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf";
  
  ngOnInit(): void {
  }

}
