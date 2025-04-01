
import envVar from '../environment/envVar';
import {Client , ID , Account} from 'appwrite';



export class AuthService {
    client = new Client();
    account;

    constructor () {
        this.client
            .setEndpoint(envVar.appWriteUrl)
            .setProject(envVar.appWriteProjectId);
            this.account = new Account(this.client);
    }


    //creating the user
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                //methods
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    //loggin the user
    async login({email, password}) {
        
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    //checking authentication State
    async getCurrentUser() {
        try {
           return await this.account.get()
        } catch (error) {
            throw error;
        }
    }

    //logout sessioin
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;