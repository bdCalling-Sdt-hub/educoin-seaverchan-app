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

export interface IStudent {
  _id: string;
  name: string;
  password: string;
  dateOfBirth: Date;
  profile: string;
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
export interface IClass {
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
export interface ICategory {
  _id: string;
  name: string;
  image: string;
  teacher: string;
  createdAt: Date;
  updatedAt: DataView;
  __v: 0;
}

export interface ICategories extends IFetchStatus {
  data: Array<ICategory>;
}
export interface ITask {
  _id: string;
  name: string;
  points: number;
  category: {
    _id: string;
    name: string;
    image: string;
    teacher: string;
    createdAt: Date;
    updatedAt: Date;
    __v: 0;
  };
  type: string;
  repeat: string;
  teacher: string;
  createdAt: Date;
  updatedAt: Date;
  __v: 0;
}

export interface ITasks extends IFetchStatus {
  data: Array<ITask>;
}
export interface IPendingTask {
  _id: string;
  task: ITask;
  student: IStudent;
  teacher: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  __v: 0;
}

export interface IPendingTasks extends IFetchStatus {
  data: Array<IPendingTask>;
}
