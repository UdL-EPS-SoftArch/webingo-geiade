import {Component, OnInit} from '@angular/core';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';
import {User} from '../login-basic/user';
import {Authority} from '../login-basic/authority';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed: boolean;
  public user: string;

  constructor(private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit() {
    this.isCollapsed = true;
    this.user = this.authenticationService.getCurrentUser().authorities[0].authority;
  }
}
