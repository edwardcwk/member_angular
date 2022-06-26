import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  feedback: any;


  constructor(private router: Router,private api: ApiService) { }

  ngOnInit(): void {
   
    let loginId = localStorage.getItem("id") || "";
    
    //console.log(loginId);
    if (loginId.length==0)  {
      alert('please login ');
      this.router.navigate(['./login']);
    }

    this.api.inboxcheck(parseInt(loginId)).subscribe(data => { let temp: any = data; console.log(temp); this.feedback = temp.data });

  }

}
