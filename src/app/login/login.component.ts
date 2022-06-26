import { ConditionalExpr } from '@angular/compiler';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


import { Member } from '../member';

//import { A } from '../member.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  member: any;
  // email1="";
  newmember = new Member();
  formgroup: FormGroup;
  feedback: any;
  wrongpw = false;

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      try {

        var changedProp = changes[propName].currentValue;
        console.log({ propName, changedProp });
        this.formgroup.setValue(changedProp)
      } catch (error) {
       // console.log("error" + changedProp);

      }

    }

  }



  constructor( private api: ApiService, private activatedroute: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.formgroup = this.fb.group({
         email: ['', Validators.email],
      password: ['', Validators.required]
    });

    // this.formgroup = new Proxy(this.member,{});



  }

  ngOnInit(): void {
    // try {
    //   this.activatedroute.data.subscribe(data => {
    //     this.member = data;
    //   })
    //   if ((history.state.member != null))
    //     this.member = history.state.member;

    //   this.formgroup.setValue(this.member);

    // } catch (error) {
    //    //console.log(error);
    // }


  }



  submit() {
    console.log("submitting");
    this.api.emailpasswordchk(this.formgroup.value.email, this.formgroup.value.password)
      .subscribe((value:any) => {
        console.log("return:");
        console.log(value);
        if (value.success){
            console.log(value);
            localStorage.setItem("id",value.data.id);
            localStorage.setItem("name",value.data.name);
            localStorage.setItem("token",value.data.token);
            this.wrongpw = false;
    // localStorage.setItem("id","1");
    // localStorage.setItem("token","1");

            window.open("./inbox","_self") ;
            
          
            
        } else {
          alert("wrong pw or email");
          this.wrongpw = true;
        }
      });

  

   }

}
