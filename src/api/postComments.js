import axios from "axios";
class postComments {


    static async postComs(txt){
        try{
            await axios.post('http://localhost:3001/posts' , txt);
        }
        catch(e){
            console.error(e)
        }
    }
}
export default postComments
