import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvitationService} from "../invitation.service";
import { Invitation} from "../invitation";


@Component({
  selector: 'app-invitation-delete',
  templateUrl: './game-invitation.component.html'
})
export class InvitationDeleteComponent implements OnInit {
  public invitation: Invitation = new Invitation();
  private id: string;
  private type: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private invitationService: InvitationService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.invitationService.get(this.id).subscribe(
      invitation => this.invitation = invitation);
  }

  delete() {
    this.invitationService.delete(this.invitation).subscribe(
      () => this.router.navigate(['invitation']));
  }
}
