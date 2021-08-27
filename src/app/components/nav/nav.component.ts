import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() navTitle: string;

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  handleHomeLinkClick(): void {
    this.router.navigate(['/home']);
  }

}
