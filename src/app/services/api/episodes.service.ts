import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.url;
  }

  public async all(): Promise<any> {
    return await this.http.get<any>(`${this.apiUrl}episode/`).toPromise();
  }

  public async show(id: any): Promise<any> {
    return await this.http.get<any>(`${this.apiUrl}episode/${id}`).toPromise();
  }

}
