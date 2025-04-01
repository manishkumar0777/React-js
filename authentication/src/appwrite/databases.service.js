import envVar from "../environment/envVar";
import {Client, ID, Databases, Query, Storage} from 'appwrite';

export class DataService {

    client = new Client();
    databases;
    bucket;
    
    constructor () {
        this.client
            .setEndpoint(envVar.appWriteUrl)
            .setProject(envVar.appWriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    //create Post method
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                envVar.appWriteDatabaseId, 
                envVar.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage, 
                    status, 
                    userId,
                    createdAt : new Date().getTime(),
                }
            )
        } catch (error) {
            console.log("Apprite error :: createPost :: error:" , error);
        }
    }

    //get a Post
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                envVar.appWriteDatabaseId,
                envVar.appWriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite Error :: GetPost :: error : ", error);
            return false;
        }
    }

    //get all Posts
    async getPosts(queries=[Query.equal("status" , 'active')]){
        try {
            return await this.databases.listDocuments(
                envVar.appWriteDatabaseId,
                envVar.appWriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("appWriteError :: getPosts :: error :", error);
            return false;
        }
    }

    //updatePost method
    async updatePost(slug, {title, content, featuredImage, status, userId}){
        try {
            return await this.databases.updateDocument(
                envVar.appWriteDatabaseId,
                envVar.appWriteCollectionId,
                slug,
                {
                    title,
                    content, 
                    featuredImage,
                    status,
                    userId,
                    updatedAt : new Date().getTime(),
                }
            )
        } catch (error) {
            console.log("appwrite error :: updatePost :: error : ", error);
        }
    }

    //DeletePost method
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                envVar.appWriteDatabaseId,
                envVar.appWriteCollectionId,
                slug
            )

            return true;
        } catch (error) {
            console.log("appwriteError :: deletePost :: error :", error);
            return false;
        }
    }

     
}

const dataService = new DataService();

export default dataService;