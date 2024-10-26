import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BladeDto } from 'src/app/models/blade.dto';
import { BaseService } from '../services/base-service/base-service';
import { PlayerDto } from 'src/app/models/player.dto';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService extends BaseService {

  private controller = 'Player'; // Define the endpoint internally

  constructor(private http: HttpClient) {
    super();
  }

  private getUrl(endPoint: string): string {
    return `${this.parentUrl}/${this.controller}/${endPoint}`;
  }

  getAllBlade(): Observable<BladeDto> {
    return this.http.post<BladeDto>(this.getUrl('GetAllBlade'), "", { headers: this.headers });
  }

  getAllPlayer(): Observable<PlayerDto> {
    return this.http.post<PlayerDto>(this.getUrl('GetAllPlayer'), "", { headers: this.headers });
  }
}
