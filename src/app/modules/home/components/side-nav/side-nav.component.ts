import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  items: any[] = [
    { id: '1', title: 'EINS' },
    { id: '2', title: 'ZWEI' },
    { id: '3', title: 'DREI' },
    { id: '4', title: 'VIER' },
    { id: '5', title: 'FUNF' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.items.push({ id: '1', name: 'EINS' });
}

}
