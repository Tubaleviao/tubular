interface UserAdditions{
    
}

export interface User extends Partial<UserAdditions>{
    username: string;
    token?: string;
    email?: string;
    verified?: boolean;
    date?: number;
    permission?: number;
    _id?: string;
}