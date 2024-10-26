import { BladeDto } from 'src/app/models/blade.dto';
import { BladeService } from './../../../services/blade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css']
})
export class CreateMatchComponent implements OnInit {

  constructor(private bladeService: BladeService) { }

  ngOnInit() {
    this.loadBlades();
  }

  isPlayerEntryPanelVisible: boolean = false;
  playerName = '';
  selectedBlade!: string;
  selectedRatchet!: string;
  selectedBit!: string;

  blades: string[] = []; // Blade options from DB
  ratchets = ['Ratchet 1', 'Ratchet 2', 'Ratchet 3']; // Replace with your actual ratchet options
  bits = ['Bit 1', 'Bit 2', 'Bit 3']; // Replace with your actual bit options

  // Sample player data
  players = [
    { name: 'Player 1', beyblade: 'Beyblade A' },
    { name: 'Player 2', beyblade: 'Beyblade B' }
  ];

  loadBlades() {
    this.bladeService.getAllBlade().subscribe(
      data => {
        data.forEach(element =>{
          var blade = `${element['name']} ${element['variant']}`
          this.blades.push(blade)
        });
        console.log(data) // Assign the fetched data to the blades array
      },
      error => {
        console.error('Error fetching blades:', error); // Handle error
      }
    );
  }

  togglePlayerEntryInfoPanel() {
    // this.isPlayerEntryPanelVisible = true;
    this.isPlayerEntryPanelVisible = !this.isPlayerEntryPanelVisible; // Set to true when Add Players button is clicked
  }

  addPlayer() {
    // Add player logic here
    console.log("Player added:", this.playerName, this.selectedBlade, this.selectedRatchet, this.selectedBit);

    // Add player to players array
    this.players.push({ name: this.playerName, beyblade: this.selectedBlade });

    // Optionally, hide the panel after adding a player
    this.isPlayerEntryPanelVisible = false;
  }
}
