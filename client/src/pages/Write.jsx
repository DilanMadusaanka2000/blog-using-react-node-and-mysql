import React , {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Write() {

  const [value , setValue] = useState ('');
  const [title , setTitle] = useState ('');
  const [file , setFile] = useState ('null');
  //const [cat , setcat] = useState ('');
  const [cat, setCat] = useState("");


  
const handleClick = async (e) =>{
  e.preventDefault();


}








  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='title'  onChange={(e) => setTitle(e.target.value)} />
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


          <input type="radio" name='cat' value="news" id='news'  onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="news">Cricket News</label>   </div>


          <div className="cat">

          <input type="radio" name='cat' value="history" id='history'  onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="history">Cricket History</label>  </div>


          <div className="cat">

          <input type="radio" name='cat' value="profile" id='profile'  onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="profile">Palyer Profile</label>  </div>


          <div className="cat">

          <input type="radio" name='cat' value="nalysis" id='anlysis'  onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="nalysis">Match Analysis</label>  </div>

          <div className="cat">

          <input type="radio" name='cat' value="culture" id='culture'  onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="culture">Cricket Culture</label> </div>


      

         
        </div>
      </div>
    </div>
  )
}

export default Write