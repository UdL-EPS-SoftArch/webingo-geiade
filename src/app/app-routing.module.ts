import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AdministratorGuard } from './login-basic/administrator.guard';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { PlayerListComponent } from './user/user-list/player-list.component';
import { PlayerDetailComponent } from './user/user-detail/player-detail.component';
import { AdminDetailComponent } from './user/user-detail/admin-detail.component';
import { PlayerDeleteComponent } from './user/user-delete/player-delete.component';
import { AdminDeleteComponent } from './user/user-delete/admin-delete.component';
import { PlayerEditComponent } from './user/user-edit/player-edit.component';
import { AdminEditComponent } from './user/user-edit/admin-edit.component';
import { PlayerCreateComponent } from './user/user-create/player-create.component';
import { AdminCreateComponent } from './user/user-create/admin-create.component';
import { InvitationListComponent } from './invitation/invitation-list/invitation-list.component';
import { InvitationCreateComponent } from './invitation/invitation-create/invitation-create.component';
import { InvitationDeleteComponent } from './invitation/invitation-delete/invitation-delete.component';
import { InvitationDetailComponent } from './invitation/invitation-detail/invitation-detail.component';
import {GameListComponent} from './game/game-list/game-list.component';
import {GameCreateComponent} from './game/game-create/game-create.component';
import {CardListComponent} from './card/card-list/card-list.component';
import {CardCreateComponent} from './card/card-create/card-create.component';
import {CardDetailComponent} from './card/card-detail/card-detail.component';
import {GameDetailComponent} from './game/game-detail/game-detail.component';
import {GameEditComponent} from './game/game-edit/game-edit.component';
import {GameDeleteComponent} from './game/game-delete/game-detele.component';
import {CardDeleteComponent} from './card/card-delete/card-delete.component';

const routes: Routes = [
  { path: 'players/new', component: PlayerCreateComponent, canActivate: [AdministratorGuard] },
  { path: 'players/:id/edit', component: PlayerEditComponent, canActivate: [LoggedInGuard] },
  { path: 'players/:id/delete', component: PlayerDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'players/:id', component: PlayerDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'admins/new', component: AdminCreateComponent, canActivate: [AdministratorGuard] },
  { path: 'admins/:id/edit', component: AdminEditComponent, canActivate: [AdministratorGuard] },
  { path: 'admins/:id/delete', component: AdminDeleteComponent, canActivate: [AdministratorGuard] },
  { path: 'admins/:id', component: AdminDetailComponent, canActivate: [AdministratorGuard] },
  { path: 'players', component: PlayerListComponent, canActivate: [LoggedInGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AdministratorGuard] },
  { path: 'invitations', component: InvitationListComponent, canActivate: [LoggedInGuard] },
  { path: 'invitations/new', component: InvitationCreateComponent, canActivate: [LoggedInGuard] },
  { path: 'invitations/:id/delete', component: InvitationDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'invitations/:id', component: InvitationDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'games', component: GameListComponent },
  { path: 'games/new', component: GameCreateComponent, canActivate: [AdministratorGuard] },
  { path: 'games/:id', component: GameDetailComponent, canActivate: [AdministratorGuard] },
  { path: 'games/:id/edit', component: GameEditComponent, canActivate: [AdministratorGuard] },
  { path: 'games/:id/delete', component: GameDeleteComponent, canActivate: [AdministratorGuard] },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'cards', component: CardListComponent },
  { path: 'cards/new', component: CardCreateComponent, canActivate: [AdministratorGuard] },
  { path: 'cards/:id', component: CardDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'cards/:id/delete', component: CardDeleteComponent, canActivate: [LoggedInGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
