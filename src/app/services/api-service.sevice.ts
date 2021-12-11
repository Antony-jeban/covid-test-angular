import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ZoneMainInfo } from "../model/zone.model";

@Injectable({ providedIn: 'root' })
export class ApiService {

    constructor(private http: HttpClient) { }

    public getDataBasedOnZones(): Promise<ZoneMainInfo> {
        return this.http.get<ZoneMainInfo>('https://api.track-covid19.in/zones.json').toPromise();
    }
}