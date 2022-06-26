import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  loginned = false;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("token"))
       this.loginned =true;
    else
        this.loginned = false;   

  }

}
