interface User {
    email?: string;
    password?: string;
    name?: string;
    joinedon?: string;
    lastloggedinon: string;
    isVerified?: boolean;
    otp?: number;
    docs: Array<number>;
}