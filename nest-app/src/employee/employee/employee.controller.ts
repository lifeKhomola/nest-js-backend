import { Controller, Get } from '@nestjs/common';
import {EmployeeService} from './employee.service';
import {Employee} from '../employee.entity';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}
 
    @Get('all')
    async getAll():Promise<Employee[]>{
        return await this.employeeService.findAll();
    }
}
