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
    ) { }

    register(client: Client): void {
        this.db.registerClient({
            uid: '204415608',
            email: 'omertashir1993@gmail.com',
            firstName: 'Omer',
            lastName: 'Tashir',
            sex: 'M',
            age: 29,
            phoneNumber: '0542880358',
            city: 'Holon',
            address: 'Israeli Ben Tzion',
            addressNumber: '7',
        } as Client);
    }

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