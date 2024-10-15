import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {

  constructor() { }

  private messageExchange = new Subject<string>(); // Subject for data exchange

  currentMessage$ = this.messageExchange.asObservable(); // Observable to which components can subscribe

  // Method to send data
  sendData(message: string){
    this.messageExchange.next(message);
    this.messageExchange.next(message);
  }
  
  
}
