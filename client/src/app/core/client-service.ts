import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClientAppointment } from "../models/client-appointment.interface";
import { Client } from "../models/client.interface";
import { DatabaseService } from "../services/database.service";

@Injectable({
    providedIn: 'root',
})
export class ClientService {

    constructor(
        private readonly db: DatabaseService
    ) {}

    // register(): void {
    //     this.db.registerClient({
    //         uid: '205432864',
    //         email: 'anaz@gmail.com',
    //         firstName: 'אנה',
    //         lastName: 'זקניים',
    //         sex: 'F',
    //         age: 82,
    //         phoneNumber: '052-5381648',
    //         city: 'חיפה',
    //         address: 'הכרמל',
    //         addressNumber: '75',
    //     } as Client).subscribe();
    // }

    getClient(uid: string): Observable<Client> {
        return this.db.getClient(uid);
    }

    getClients(): Observable<Client[]> {
        return this.db.getClients();
    }

    getClientAppointments(clientId: string): Observable<ClientAppointment[]> {
        return this.db.getClientAppointments(clientId);
    }

    addAppointment(clientAppointment: ClientAppointment): Observable<any> {
        return this.db.addClientAppointment(clientAppointment);
    }

    onUpdates(): Observable<boolean> {
        return this.db.updateSub.asObservable();
    }
}