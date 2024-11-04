import { UserEntity } from "../entities/user.entity";

export interface IUserRepository {
    create(user: UserEntity): Promise<UserEntity>;
    findById(id: string): Promise<UserEntity | null>;
    findAll(): Promise<UserEntity[]>;
    update(user: UserEntity): Promise<UserEntity>;
    delete(user: UserEntity): Promise<void>;
}