import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @ViewChild('content') content: any;
  @Input() data: any;
  @Input() header = "";
  @Input() title = "title";
 

  constructor(private mem: MemberService, private router: Router) { }

  ngOnInit(): void {
 
 // this.content.scrollToBottom(300);
    
  }

  unsort(a: any, b: any) {
    return 1;

  }

  // delete(member: Member | undefined) {
  //   if (member == undefined)
  //       return;
  //   this.mem.deletemember(member.id).subscribe(d => { let temp:any=d; console.log(temp); this.data=temp.member});
  // }

//   route(member: any) {
//     this.mem.listmember(member.id).subscribe(d => {
//       console.log(d);
     
//       this.router.navigateByUrl('/chat', { state: d });
//     });

//    }

 }
