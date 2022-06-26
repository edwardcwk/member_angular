import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  feedback: any;


  constructor(private mem: MemberService) { }

  ngOnInit(): void {

    this.mem.listmember().subscribe(data => { let temp: any = data; console.log(temp); this.feedback = temp.member });

  }

}
