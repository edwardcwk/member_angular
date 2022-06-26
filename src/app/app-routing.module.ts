import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { GuardGuard } from './guard.guard';
import { InboxComponent } from './inbox/inbox.component';
import { LoginComponent } from './login/login.component';
import { MemberaddeditComponent } from './memberaddedit/memberaddedit.component';
import { MemberlistComponent } from './memberlist/memberlist.component';


const routes: Routes = [
  { path: "inbox", component: InboxComponent,canActivate:[GuardGuard] }  ,
  { path: "chat/:id/:name", component: ChatComponent,canActivate:[GuardGuard] }  ,
  { path: "memberlist", component: MemberlistComponent,canActivate:[GuardGuard] },
  { path: "login", component: LoginComponent },
  { path: "memberaddedit", component: MemberaddeditComponent,canActivate:[GuardGuard] },
  { path: "", component: InboxComponent,canActivate:[GuardGuard] }

];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]
})


export class AppRoutingModule { }
