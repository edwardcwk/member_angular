import { IonContent, Platform } from '@ionic/angular';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../api.service';

import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessagepriorityService } from '../message-priority.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() header = "";
  @Input() title = "title";
  @ViewChild('content') content: any;
  @ViewChild('vmsgtext') vmsgtext: any;


  isDesktop = false;
  data: any;
  loginId = "";
  id = "";
  name: string | null | undefined;
  msgtext: string = "";
  priorities: any;
  params: any;


  constructor(private ar: ActivatedRoute, private messagepriortyService: MessagepriorityService, private msg: MessageService, private api: ApiService, private router: Router,private platform: Platform) { }

  ngOnInit() {
    if (this.platform.is("desktop"))
       this.isDesktop = true;

    this.loginId = localStorage.getItem("id") || "";
    console.log("loginid" + this.loginId);

    this.messagepriortyService.listmessagepriority().subscribe((d: any) => { let temp: any = d; this.priorities = temp.data; });

    this.ar.params.subscribe((d: any) => {
      console.log(d); this.id = d.id; this.name = d.name;
      this.api.chatread(parseInt(this.loginId || '0'), parseInt(this.id || '0')).subscribe(d2 => { console.log(d2); let temp: any = d2; this.data = temp.data; this.content.scrollToBottom(100); });

    });


    window.addEventListener("orientationchange", event => {
      setTimeout(() => {
        this.content.scrollToBottom(100);
        // this.vmsgtext.setFocus();
      }, 1000);
    });
  
    window.addEventListener('resize', event => {
      setTimeout(() => {
        this.content.scrollToBottom(100);
        // this.vmsgtext.setFocus();
      }, 1000);
  
    });
  
  
  }



    ionViewDidLoad() {
      console.log("ionViewDidLoad");
      setTimeout(() => {
        this.content.scrollToBottom(100);
        // this.vmsgtext.setFocus();
      }, 1000);
    }

    focus(event: any) {
      this.content.scrollToBottom(100);

    }




    keypress(event: any) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.submitmsg('M');
      }
      this.content.scrollToBottom(100);
    }



    submitmsg(priorvalue: string) {
      if (this.msgtext.length == 0)
        return;
      this.msg.addmessage(
        {
          sender_id: this.loginId,
          receiver_id: this.id,
          message: this.msgtext,
          priority: priorvalue
        }).subscribe(d => { let result: any = d; if (result.success) { this.data.push(result.data) }; this.content.scrollToBottom(300); });

      this.msgtext = "";
    }

  }
