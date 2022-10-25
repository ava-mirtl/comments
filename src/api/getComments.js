import axios from "axios";
class GetComments {


    static async getComs(){
        try{
            const responce = await axios.get('http://localhost:3001/posts');
            return responce.data;
        }
        catch(e){
            return e.message
        }
    }
}
export default GetComments