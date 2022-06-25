import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Produto extends Model {
  @Column
  description: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
