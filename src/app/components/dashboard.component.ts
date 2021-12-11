import { Component, OnInit } from "@angular/core";
import { ZoneMainInfo } from "../model/zone.model";
import { ApiService } from "../services/api-service.sevice";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    public zoneInfo: ZoneMainInfo;

    constructor(private apiService: ApiService) { }

    public ngOnInit(): void {
        const callback = (data: ZoneMainInfo) => {
            console.log(data.TN);
            this.zoneInfo = data;
            data.TN.forEach(element => {
                console.log(element.state)
            });
        }

        this.apiService.getDataBasedOnZones().then(callback);
    }


}