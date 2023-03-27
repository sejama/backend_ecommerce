import { Types } from "mongoose";

//import { Role } from './../../auth/enums/role.enum';
export class User {
    username:string;
    email:string;
    password: string;
    //roles: Role[];
}