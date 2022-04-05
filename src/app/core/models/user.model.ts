export class User {
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public email: string;
    public phoneNumber: number;
    public role: number;
    public address: string
    public date: any
    constructor(obj) {
        this.firstName = obj.firstName || '';
        this.middleName = obj.middleName || '';
        this.lastName = obj.lastName || '';
        this.email = obj.email || '';
        this.phoneNumber = obj.phoneNumber || '';
        this.role = Number(obj.role);
        this.address = obj.address || '';
        this.date = obj.date
    }
}