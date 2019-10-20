// collection Users
export class UsersModel {
    public _id?: string;
    public name: string;
    public login: string;
    public password: string;
    public permission: string;
    public email: string;
    public profiles = new Array<string>();
    public registeredBy: string;
    public registrationDate: string;
    public modifiedBy: string;
    public modificationDate: string;
    public registeredByTheSystem: string;
}
