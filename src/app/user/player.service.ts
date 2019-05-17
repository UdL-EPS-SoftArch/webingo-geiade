import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RestService } from 'angular4-hal-aot';
import { Player } from './player';
import {Invitation} from '../invitation/invitation';
import {Router} from '@angular/router';
import {InvitationService} from '../invitation/invitation.service';

@Injectable()
export class PlayerService extends RestService<Player> {
  private invitation: Invitation;

  constructor(injector: Injector,
              private invitationService: InvitationService,
              private router: Router) {
    super(Player, 'players', injector);
  }

  public findByUsernameContaining(text: string): Observable<Player[]> {
    const options: any = {params: [{key: 'text', value: text}]};
    return this.search('findByUsernameContaining', options);
  }

  public invitePlayer(player: Player): void {
    this.invitation = new Invitation();
    this.invitation.playerInvited = player;

    this.invitationService.create(this.invitation).subscribe(
      (invitation: Invitation) => this.router.navigate([invitation.uri]));
  }
}
