import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiblingService } from '../../services/sibling.service';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { EmployeeModel } from '../../Model/employee';
import { Employee } from '../models/Interfaces/employee';
import { AgeCalculationPipe } from '../pipes/age-calculation.pipe';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, AgeCalculationPipe],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {

  employees$!: Observable<Employee[]>;

  @Input() EmployeeDetails: EmployeeModel = new EmployeeModel();

  @Output() parentData = new EventEmitter<string>();

  message: string = "";
  message1: string = "";

  constructor(private siblingService: SiblingService) {

  }

  ngOnInit(): void {

    this.employees$ = of([
      { id: 1, name: 'John Doe', dateOfBirth: '07-07-1990', address: '123 Main St, Springfield', salary: 50000 },
      { id: 2, name: 'Jane Smith', dateOfBirth: '07-07-1995', address: '456 Elm St, Shelbyville', salary: 60000 },
      { id: 3, name: 'Bob Johnson', dateOfBirth: '07-07-1998', address: '789 Oak St, Capital City', salary: 75000 },
      // Add more employee objects as needed
    ]);

    debugger;
    this.getMessage1();
    this.getMessage2();

    const subject = new Subject<number>();

    // Subscribers
    subject.subscribe(value => console.log('Subscriber 1:', value));
    subject.subscribe(value => console.log('Subscriber 2:', value));

    // Emit values
    subject.next(1); // Both subscribers get 1
    subject.next(2); // Both subscribers get 2

    const behaviorSubject = new BehaviorSubject<number>(0); // Initial value

    // Subscribers
    behaviorSubject.subscribe(value => console.log('Subscriber 1:', value));
    behaviorSubject.next(1); // Both subscribers get 1

    // New Subscriber
    behaviorSubject.subscribe(value => console.log('Subscriber 2:', value)); // Will immediately get the latest value (1)

    // Emit new value
    behaviorSubject.next(2); // Both subscribers get 2

  }

  getMessage1(): void {
    this.siblingService.currentMessage$.subscribe({
      next: (msg) => {
        this.message = msg;
        console.log(this.message);
      }
    });
  }
  getMessage2(): void {
    this.siblingService.currentMessage$.subscribe({
      next: (msg) => {
        this.message1 = msg;
        console.log();
      }
    });
  }

  sendData() {
    this.parentData.emit("Sending Data from Child To Parent");
  }
}
