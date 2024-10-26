import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  protected parentUrl = 'http://localhost:5299'; // Protected so it can be accessed by child classes
  protected headers = new HttpHeaders({ 'Content-Type': 'application/json' });
}
