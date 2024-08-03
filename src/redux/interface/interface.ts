export interface IFetchStatus {
  message: string;
  success: boolean;
}

export interface IUser extends IFetchStatus {
  data: {
    __v: number;
    _id: any;
    contact: string;
    createdAt: Date;
    email: string;
    location: string;
    name: string;
    password: string;
    profile: string;
    role: string;
    status: boolean;
    totalStudent: 2;
    updatedAt: Date;
  };
}

interface IStudent {
  _id: string;
  name: string;
  password: string;
  dateOfBirth: Date;
  image: string;
  class: string;
  teacher: string;
  points: number;
  level: number;
  rewards: number;
  pendingPoints: number;
  createdAt: Date;
  updatedAt: Date;
  __v: 0;
}

export interface IStudents extends IFetchStatus {
  data: Array<IStudent>;
}
interface IClass {
  _id: string;
  className: string;
  startDate: Date;
  endDate: Date;
  teacher: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: 0;
}

export interface IClasses extends IFetchStatus {
  data: Array<IClass>;
}
