import { Component, Input, OnInit } from '@angular/core';
import { MatchDetailDto } from 'src/app/models/match-detail.dto';

@Component({
  selector: 'ongoing-match',
  templateUrl: './ongoing-match.component.html',
  styleUrls: ['./ongoing-match.component.css']
})
export class OngoingMatchComponent implements OnInit {

  @Input() p1Name!: string;
  @Input() p2Name!: string;
  @Input() p1Bey!: string;
  @Input() p2Bey!: string;

  ongoingMatches: MatchDetailDto[] = [];

  constructor() {}

  ngOnInit() {
    this.ongoingMatches = [
      {
        id: 'ADSASDASD',
        player: [
          {
            id: '1',
            alias: this.p1Name,
            beys: [
              {
                id: 'AQ2SDASD',
                blade: 'Whalewave',
                ratchet: '1-60',
                bit: 'F'
              }
            ]
          },
          {
            id: 'SDFSDAFWF',  // Ensure IDs are unique
            alias: this.p2Name,
            beys: [
              {
                id: 'ADSFWCAW2',
                blade: 'L-Drago',
                ratchet: '5-60',
                bit: 'F'
              }
            ]
          }
        ],
        score: 0
      },
      // Add more matches as needed
    ];
  }
}
