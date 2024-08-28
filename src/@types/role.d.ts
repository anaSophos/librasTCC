import { Document, Types } from 'mongoose';

export type TypeRole = {
  _id: Types.ObjectId;
  nameRole: string;
  descriptionRole: string;
  permissions: Types.ObjectId[];
};
