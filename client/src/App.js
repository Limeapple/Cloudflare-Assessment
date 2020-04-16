import React, { useState, useEffect } from 'react';
import './App.css';
import contentWriter from './img/content-editor.png'
function App() {
  const [webAddress,setWebAddress] = useState([])
  useEffect(()=>{
    redirect()
  },[])
  /*fetching web link from server.js and saving it to state*/
  const redirect =(e) =>{
    fetch('/api/link')
    .then(response => response.json())
    .then(data=>{
      setWebAddress(data)
    })}

  return (
    <div className='App-header'>
      <div className='hideImageContainer' style={imgContainer}>
         <img src={contentWriter} width={360} height={400} alt='woman editing a screen'/>
      </div>

      <div className ='expandTextContainer' style={textContainer}>
        <div style={headerText}>CloudFlare Assessment</div>
        <div style={text}>Click on the button below to be redirected to one of two different web pages</div>
        <div style={buttonContainer}>
          <a onClick={()=>redirect()} style= {button} href={ webAddress.web } target='_blank' rel="noopener noreferrer">
           <span style={anchorText}>Redirect</span>
          </a>
        </div>
      </div>
    </div>
  );
}
const headerText ={
  textAlign:'center',
  fontWeight:'bold',
  fontSize:40,
  marginTop:'10vh',
  color:'#282c34',
  paddingBottom:30
}
const text ={
  color:'#282c34',
  textAlign:'center'
}
const buttonContainer ={
  display:'flex',
  justifyContent:'center',
}
const imgContainer ={
  width:'50vw',
  height:'100vh',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:' #282c34',
}
const textContainer ={
  height:'100vh',
  width:'50vw',
  backgroundColor:'hsla(170, 51%, 50%, 1)',
  padding:'0 30px 0 30px',
  paddingTop:'10%'
}
const button={
  backgroundColor:'hsla(170, 51%, 50%, 1)',
  border:'none',
  width:'45%',
  borderRadius:10,
  textDecoration:'none',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  position:'relative',
  top:50,
  padding:10,
  boxShadow: '1px -1px 7px hsla(170, 51%, 70%, 1), 5px 4px 5px hsla(170, 51%, 40%, 1)',
}
const anchorText ={
  color:'#282c34',
  fontSize:30,
  fontWeight:'bold',
  letterSpacing:1
}

export default App;
