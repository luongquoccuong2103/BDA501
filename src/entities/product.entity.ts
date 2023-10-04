import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  imageUrl: string;

  @Column()
  description: string;

  @Column('double precision')
  price: number;

  @Column()
  countInStock: number;
}
