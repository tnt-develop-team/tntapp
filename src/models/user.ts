export class User {
    constructor(public uid: string,
        public displayName: string,
        public email: string,
        public emailVerified: boolean,
        public phoneNumber: string,
        public photoURL: string) {

    }
}
