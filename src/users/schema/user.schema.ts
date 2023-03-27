import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class User {

    @Prop({ required: true, index: true })
    email: string;

    @Prop({ required: true, index: true })
    username: string;
    
    @Prop()
    password: string;

    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop()
    role: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);