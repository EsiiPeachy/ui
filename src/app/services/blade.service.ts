import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BladeDto } from 'src/app/models/blade.dto';
import { PlayerDto } from 'src/app/models/player.dto';
import { BaseService } from '../services/base-service/base-service';

@Injectable({
  providedIn: 'root' // This allows the service to be injected at any point in the application
})
export class BladeService extends BaseService {

  private controller = 'Blade'; // Define the endpoint internally

  constructor(private http: HttpClient) {
    super();
  }

  private getUrl(endPoint: string): string {
    return `${this.parentUrl}/${this.controller}/${endPoint}`;
  }

  getAllBlade(): Observable<BladeDto[]> {
    return this.http.post<BladeDto[]>(this.getUrl('GetAllBlade'), "", { headers: this.headers });
  }
}
