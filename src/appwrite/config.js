import Conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";
export class services {
    Client =new Client();
    databases;
    bucket;
    constructor(){
        this.Client
        .setEndpoint(Conf.appwritUrl)
        .setEndpoint(Conf.appwriteProjectId)
            this.databases = new Databases (this.Client)
            this.bucket=new Storage (this.Client)
            
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                Conf.appwriteBucketId,
                ID.unique(),
                file,
            )
            
        } catch (error) {
            
            throw error
        }
    }
    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                Conf.appwriteBucketId,
                fileId
            )
        }
        catch (error){
            throw error

        }
    }
    async getFilePreview(fileId){
        return this.bucket.getFilePreview(
            Conf.appwriteBucketId,
            fileId
        )
    }
    async getFileDownload(fileId){
return this.bucket.getFileDownload(
    Conf.appwriteBucketId,
    fileId
)
    }
    
    async getfile(slug){
    try {
        return await this.databases.getDocument(
            Conf.appwriteDatabaseId,
            Conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
        throw error
    }
    }
    
}
const service = new services()
export default service