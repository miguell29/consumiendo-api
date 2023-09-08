import { Ref,ref } from "vue";
import IPost from "@/interfaces/IPost";



class PostService {
    private postList: Ref<Array<IPost>>;  

    constructor(){
        this.postList = ref<Array<IPost>>([])
    }
    getPost():Ref<Array<IPost>>{
        return this.postList;
    }

    async fetchAll(): Promise<void>{
        try {
            const url = "https://jsonplaceholder.typicode.com/posts";
            const response = await fetch(url);
            const json = await response.json();
            this.postList.value = json;
        } catch (error) {
            console.log(error);
            
        }
    }
}
export default PostService
