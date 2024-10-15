import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from "../employee-details/employee-details.component";
import { EmployeeModel } from '../../Model/employee';
import { SiblingService } from '../../services/sibling.service';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, EmployeeDetailsComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeeName: string = "";

  empName = signal("Hello");

  employeeModel: EmployeeModel = new EmployeeModel();

  constructor(private siblingService: SiblingService, private testService: TestService) {
  }

  submit() {

  }

  receiveData(value: any) {
    this.employeeModel.name = value;
  }

  sendMessage(name: any) {
    this.siblingService.sendData(name);
  }

  interceptorMethod(): any {
    this.testService.getCatFact().subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
