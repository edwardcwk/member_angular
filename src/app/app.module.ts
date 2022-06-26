import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { MemberService } from './member.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';
import { MemberaddeditComponent } from './memberaddedit/memberaddedit.component';
import { MessageService } from './message.service';
import { MessagepriorityService } from './message-priority.service';
import { ApiService } from './api.service';

import { ChatComponent } from './chat/chat.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    MemberlistComponent,
    MemberaddeditComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    InboxComponent,
    ChatComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  providers: [ MemberService, MessageService, MessagepriorityService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
