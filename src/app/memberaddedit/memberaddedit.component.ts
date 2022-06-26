
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Member } from '../member';
import { MemberService } from '../member.service';
//import { MessagepriorityService } from '../message-priority.service';

@Component({
  selector: 'app-memberaddedit',
  templateUrl: './memberaddedit.component.html',
  styleUrls: ['./memberaddedit.component.css']
})
export class MemberaddeditComponent implements OnInit {
  @Input()
  member: any;

  newmember = new Member();
  formgroup: FormGroup;
  feedback: any;
  priority: any;




  constructor( private mem: MemberService, private activatedroute: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.formgroup = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });

  



  }

  ngOnInit(): void {

    let loginId = localStorage.getItem("id") || "";
    if (loginId != undefined) {
      this.mem.listmember(parseInt(loginId)).subscribe((value: any) => { console.log(value); this.formgroup.patchValue(value.member); });
    }



  }



  submit() {
    console.log("submitting");
    console.log(this.formgroup.value);
    this.mem.updatemember(this.formgroup.value)
      .subscribe((d: any) => { console.log(d); if (d.success) {alert("updated");window.open('/inbox');} else alert("invalid password"); });
  }

}