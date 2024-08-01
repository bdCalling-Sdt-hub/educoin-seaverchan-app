
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
