import React , {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import moment from "moment";



function Write() {


  const state = useLocation().state

  const [value , setValue] = useState ( state?.title ||'');
  const [title , setTitle] = useState (state?.desc ||'');
  const [file , setFile] = useState (null);
  //const [cat , setcat] = useState ('');
  const [cat, setCat] = useState(state?.cat ||"");




  const navigate = useNavigate()


  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  
const handleClick = async (e) =>{
  e.preventDefault();
  const imgUrl = await upload();





   

  
  try {
    state
      ? await axios.put(`/posts/${state.id}`, {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
        })
      : await axios.post(`/posts/`, {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });
        navigate("/")
  } catch (err) {
    console.log(err);
  }

}








  return (
    <div className='add'>
      <div className="content">
        <input type="text" value={title} placeholder='title'  onChange={(e) => setTitle(e.target.value)} />
        <div className="editorContainer">
         <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />

        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish the Post</h1>
          <span>
            <b>Publish</b> Draft
          </span>

          <span>
            <b>Visibility</b> public
          </span>
          <input style={{display:"none"}} type="file" id='file' name=''   onChange={(e) => setFile(e.target.files[0])} />
          <label className='file' htmlFor="file">Uplode Image</label>
          <div className="button">
            <button>Save as draft </button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>


          <div className="cat">


          <input type="radio" checked={cat ==="news"} name='cat' value="news" id='news'  onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="news">Cricket News</label>   </div>


          <div className="cat">

          <input type="radio" checked={cat ==="history"}  name='cat' value="history" id='history'  onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="history">Cricket History</label>  </div>


          <div className="cat">

          <input type="radio" checked={cat ==="profile"}  name='cat' value="profile" id='profile'  onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="profile">Palyer Profile</label>  </div>


          <div className="cat">

          <input type="radio" checked={cat ==="anlysis"}  name='cat' value="anlysis" id='anlysis'  onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="nalysis">Match Analysis</label>  </div>

          <div className="cat">

          <input type="radio" checked={cat ==="culture"}  name='cat' value="culture" id='culture'  onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="culture">Cricket Culture</label> </div>


      

         
        </div>
      </div>
    </div>
  )
}

export default Write