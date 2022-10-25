import React, {useState, useEffect} from 'react';
import Photo from '../Assets/IMG_0185.JPG';
import Comment from '../Comment/Comment';
import getComments from '../api/getComments';
import postComments from '../api/postComments';


export default function Main() {
    const [data, setData] = useState(false);
    const [text, setText]= useState("");
    const [flag, setFlag] = useState(false);
    
async function getComms(){
const comms = await getComments.getComs();
setData(comms);
}


useEffect(() => {
  getComms()},[]); 


function handleChange(e) {
    if (e.currentTarget.value.search(/viagra/i) > -1 || e.currentTarget.value.search(/xxx/i) > -1 || e.currentTarget.value.search(/ххх/i) > -1) {
        let censure = "***";
        let commentCens = e.currentTarget.value.replace(/viagra/ig, censure);
        let commentCens1 = commentCens.replace(/xxx/ig, censure);
        let commentCens2 = commentCens1.replace(/ххх/ig, censure);
    setText(commentCens2);}
    else{
        setText(e.currentTarget.value)
    }
}
function handleClick() { 
document.getElementById('text').value="";
data.unshift({"txt": text, "id": data.length+1});
setFlag(!flag) ;
postComments.postComs(text);
}
if (!data) {
    return <div>Загрузка...</div>;
  } 
  return  (
    <div>
    <img className='photo' src={Photo} alt="flower"/>
    <div className="plus">Добавьте комментарий</div>
    <input type="text" id="text" onChange={handleChange}/>
    <button id="send" onClick={handleClick}>Отправить</button>
    <div id="comments">
   {data.map((item)=>(
<Comment key = {item.index} txt = {item.txt} />
      ))}
    </div>
    </div>
  )
}
