import React, { useEffect, useState } from 'react';

const App = () => {
  const [markdown,setMarkdown]=useState('');
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(false);  

  const handletext = (e) =>{
    setLoading(true);
    setMarkdown(e.target.value)
  }

  useEffect(()=>{
    // setLoading(true);
    const timer = setTimeout(()=>{
      setHtml(markdown);
      setLoading(false);
    },500);
    return ()=> clearTimeout(timer);
  },[markdown]);

  return (
  <div className='app'>
      <textarea className='textarea' onChange={handletext}> 
      </textarea>
      
      {loading ? 
        ( <p className='loading'>loading...</p> )
        :
        (<div className="preview">
          { html }
        </div>
      )}
  </div>
  )
}
export default App;
