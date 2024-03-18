import React , {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Write() {

  const [value , setValue] = useState ('');
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='title' />
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
          <input style={{display:"none"}} type="file" id='file' name=''  />
          <label className='file' htmlFor="file">Uplode Image</label>
          <div className="button">
            <button>Save as draft </button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>


          <div className="cat">


          <input type="radio" name='cat' value="news" id='news' />
          <label htmlFor="news">Cricket News</label>   </div>


          <div className="cat">

          <input type="radio" name='cat' value="history" id='history' />
          <label htmlFor="history">Cricket History</label>  </div>


          <div className="cat">

          <input type="radio" name='cat' value="profile" id='profile' />
          <label htmlFor="profile">Palyer Profile</label>  </div>


          <div className="cat">

          <input type="radio" name='cat' value="nalysis" id='nalysis' />
          <label htmlFor="nalysis">Match Analysis</label>  </div>

          <div className="cat">

          <input type="radio" name='cat' value="culture" id='culture' />
          <label htmlFor="culture">Cricket Culture</label> </div>


      

         
        </div>
      </div>
    </div>
  )
}

export default Write