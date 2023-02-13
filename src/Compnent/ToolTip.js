import React, { useState } from 'react'
import { VscTriangleDown, VscTriangleRight,VscTriangleLeft,VscTriangleUp} from 'react-icons/vsc';


function ToolTip({children,position}) {
  let[Position,setPosition]=useState(null)// set position on mouse enter and null when mouse leaves
  console.log(position);
  return (
    <div onMouseEnter={()=>setPosition(position)} onMouseLeave={()=>setPosition(null)}>
    {Position==='left'?
      <>
      <div style={{display:"inline-block"}}>
      <div style={{position:'relative'}}>
      <div style={{display:"flex",flexDirection:"row",alignItems:"center",position:'absolute',left:-230}}>
      <ToolTipComponet/>
      <VscTriangleRight size={'2rem'} style={{marginLeft:'-1rem'}}/>
      </div>
      {children}
      </div>
      </div>
      </>
      :Position==='right'?
      <>
      <div style={{display:"inline-block"}}>
      
      <div style={{position:'relative'}}>
      <div style={{display:"flex",flexDirection:"row",alignItems:"center",position:'absolute',right:-230}}>
      <VscTriangleLeft size={'2rem'} style={{marginRight:'-1rem'}}/>
      <ToolTipComponet/>
      </div>
      {children}
      </div>  
      </div>
      </>
      :
      Position==='bottom'?
      <>
      <div style={{display:"inline-block"}}>
          <div style={{position:'relative'}}>
             {children}
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",position:'absolute'}}>
                 <VscTriangleUp size={'2rem'} style={{marginBottom:'-1rem'}}/>
                 <ToolTipComponet/>
              </div>
          </div>
     </div>      
      </>
      :
      Position==='top'?
      <>
      <div style={{display:"inline-block"}}>
      <div style={{position:'relative'}}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",position:'absolute',bottom:30}}>
      <ToolTipComponet/>
      <VscTriangleDown size={'2rem'} style={{marginTop:'-1rem'}}/>
      </div>
      {children}
      </div>
      </div>    
       
      </>
      :   // if position is not speciefied then show it whithout tooltip components
      <div>{children}</div>
      }
      </div>
  )
}

const ToolTipComponet=()=>{
  return(
    <>
    <div style={{display:"inline-block",alignItems:"center",backgroundColor:"black",color:"white",textAlign:"center",padding:'.8rem',borderRadius:".5rem"}}>
          <span>Thanks for hovering over me
          </span>
          <br/>
          <span>I am a tool tip</span>
    </div>
    </>
  )
}

export default ToolTip