import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { filter, startWith, switchMap, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { Client } from '../models/client.interface';
import { ClientService } from '../core/client-service';
import { LanguageService } from '../core/language-service';
import { TextManager } from '../core/text-manager';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
          animate("0.2s ease-in", keyframes([
            style({ transform: `translateX(10%)`, opacity: .5 }),
            style({ transform: `translateX(5%)`, opacity: .65 }),
            style({ transform: `translateX(0%)`, opacity: .8 }),
            style({ transform: `translateX(0%)`, opacity: 1 }),
          ])),
      ]),
    ])
  ]
})
export class ClientsComponent implements OnInit, AfterViewInit {

  rtl = false;
  textManager: any;
  refresh$ = new Subject<void>();
  clients$!: Observable<Client[]>;

  constructor(
    private readonly clientService: ClientService,
    private readonly languageService: LanguageService
  ) { }

  get selectedLanguage(): 'en' | 'he' {
    return this.textManager === TextManager.en ? 'en' : 'he';
  }

  ngOnInit(): void {
    this.languageService.selectTextManager().subscribe(text => this.textManager = text);
    this.languageService.selectDirection().subscribe(dir => this.rtl = dir === 'rtl');

    this.clients$ = this.refresh$.pipe(
      startWith(),
      switchMap(() => this.clientService.getClients())
    );

    this.clientService.onUpdates().pipe(
      filter(update => !!update),
      tap(() => this.refresh$.next())
    ).subscribe();
  }

  ngAfterViewInit(): void {
    this.refresh$.next();
  }
}
