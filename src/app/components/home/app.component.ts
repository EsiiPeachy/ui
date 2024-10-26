import { Component } from '@angular/core';
import { PlayerDto } from 'src/app/models/player.dto';
import { HttpRequestsService } from '../../services/http-requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BEYBLADE MATCH MAKER';

  constructor(private httpRequestsService: HttpRequestsService) { }

  p1: PlayerDto = {
    id: '1',
    alias: 'RAF',
    beys: [
      {
        id: '1',
        blade: 'WhaleWave',
        ratchet: '5-60',
        bit: 'P'
      }
    ]
  }

  p2: PlayerDto = {
    id: '1',
    alias: 'PRUD',
    beys: [
      {
        id: '1',
        blade: 'L-Drago',
        ratchet: '1-60',
        bit: 'F'
      }
    ]
  }

  bey1: string = `${this.p1.beys[0].blade} ${this.p1.beys[0].ratchet}${this.p1.beys[0].bit}`;
  bey2: string = `${this.p2.beys[0].blade} ${this.p2.beys[0].ratchet}${this.p2.beys[0].bit}`;

  isListVisible: boolean = false; // Track visibility of the list
  isOngoingMatchVisible: boolean = false;
  isCreateMatchVisible: boolean = false; // Track visibility of the OngoingMatch panel

  toggleList() {
    this.isListVisible = !this.isListVisible; // Toggle the visibility
  }

  toggleOngoingMatchPanel() {
    this.isOngoingMatchVisible = true; // Set to true when Ongoing Match button is clicked
  }

  toggleCreateMatchPanel() {
    this.isCreateMatchVisible = true; // Set to true when Create Match button is clicked
  }

  triggerMethod() {
    this.httpRequestsService.getAllPlayer().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
