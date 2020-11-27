import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';


@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Team[] = [
    new Team('test name', 'test img', 'test sport', 'test season', 'test record', 'test description')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
