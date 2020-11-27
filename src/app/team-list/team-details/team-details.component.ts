import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../models/team.model';

@Component({
  selector: 'team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  @Input() team: Team;
  constructor() { }

  ngOnInit(): void {
  }

}
