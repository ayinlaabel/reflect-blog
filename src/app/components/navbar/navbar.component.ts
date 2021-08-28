import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showMenu:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    if(this.showMenu == true){
      this.showMenu =false
    }else{
      this.showMenu= true
    }
  }
}
