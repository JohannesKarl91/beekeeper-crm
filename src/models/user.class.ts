export class User {
    firstName: string;
    lastName: string;
    emailAddress: string;
    birthDate: number;
    street: string;
    houseNumber: number;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.emailAddress = obj ? obj.emailAddress : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.houseNumber = obj ? obj.houseNumber : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            emailAddress: this.emailAddress,
            birthDate: this.birthDate,
            street: this.street,
            houseNumber: this.houseNumber,
            zipCode: this.zipCode,
            city: this.city
        }
    }
}

