import {Entity, model, property} from '@loopback/repository';

@model()
export class Employee extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    index: {unique: true},
  })
  employee_id: string;

  @property({
    type: 'string',
    required: true,
  })
  store_id: string;

  @property({
    type: 'string',
    required: true,
  })
  first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  address_id: string;

  @property({
    type: 'boolean',
    required: true,
  })
  activebool: boolean;

  @property({
    type: 'date',
    required: true,
  })
  create_date: string;

  @property({
    type: 'date',
    required: true,
  })
  last_update: string;

  @property({
    type: 'number',
    required: true,
  })
  active: number;

  @property({
    type: 'string',
    required: true,
  })
  position: string;

  @property({
    type: 'string',
    required: true,
  })
  department: string;

  @property({
    type: 'number',
    required: true,
  })
  salary: number;

  @property({
    type: 'date',
    required: true,
  })
  hire_date: string;

  @property({
    type: 'string',
  })
  manager_id?: string;

  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

export interface EmployeeRelations {
  // descreva propriedades de navegação aqui
}

export type EmployeeWithRelations = Employee & EmployeeRelations;
