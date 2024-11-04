import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'email', length: 100, nullable: false })
  email: string;

  @Column({ name: 'password', length: 10, nullable: false })
  password: string;

  @Column({ name: 'birthday', nullable: false })
  birthday: Date;

  @Column({ name: 'dd', length: 2, nullable: false })
  dd: string;

  @Column({ name: 'phone', length: 9, nullable: false })
  phone: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deletedAt' })
  deletedAt: Date;

  constructor(props: {
    name: string;
    email: string;
    password: string;
    birthday: Date;
    dd: string;
    phone: string;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
  } = {} as any,
    id?: string,) {
      
    Object.assign(this, props);
    this.id = id ?? uuid();
    this.createdAt = props?.createdAt ?? new Date();
  }
}
