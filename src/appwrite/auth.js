import Conf from '../conf/conf'
import { Client, Account,ID } from 'appwrite'

export class Authservice {
    client= new Client
    account
    constructor(){
        client
        .setEndpoint(Conf.appwritUrl)
        .setProject(Conf.appwriteProjectId)
        this.account = new Account(this.client)
    }
    async createAccount({email,password,name}){
    const useraccount =await this.account.create(ID.unique(),email,password,name);
    try {
        if(useraccount){
            return this.login({email,password});
    
        }
        else
        {
            return useraccount
        }
    } catch (error) {
        throw error
        
    }
    
    }
    async login({email,password}){
        try {
            
            return await this.account.createEmailSession(email,password);

        } catch (error) {
            throw error
            
        }
    }
    async logout(){
        try {
            await this.account.deleteSession();

            
        } catch (error) {
            
        }
    }
    async getCurrentuser(){
        try {
             return await this.account.get()
        } catch (error) {
            throw error
        }
    }
}
const authservice=new Authservice()
export default authservice