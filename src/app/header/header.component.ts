import { Platform } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  loginname="";
  loginId  ="";
  token="";
  activeId = "inbox";
  pf:any;
  
  constructor(private location:Location, private p: Platform) {
    this.pf = p.platforms;
   // alert(p.is("android"));
    
   }
 
  
  ngOnInit(): void {
    this.loginname = localStorage.getItem("name") || "";
    this.loginId =localStorage.getItem("id") || "";
    this.token = localStorage.getItem("token") || "";
    
  }
  
  


  clickhandler(event: Event){
    
    document.getElementById(this.activeId)?.classList.remove("active");
    this.activeId = (event.target as Element).id;
  }

 
  
  back(){
    this.location.back();
  }


}
