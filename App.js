import React from 'react';
import ScalableTextField from './ScalableTextField';

function App() {
  return (
    <div id="abc">
    <ScalableTextField 
        param={{id : 'filled',
          border:{
               position : 'relative',
               top:'50%',
               left:'50%',
               border : '1px solid rgb(100,100,0)',
            },
          variant : 'filled', 
          label:'name',
          default:'Hey there !!',
          inputStyles:{fontFamily: 'Poppins',color:'rgba(100,0,0,1)'},
          inputLabelStyles:{fontFamily: 'Droid Sans'}}}/>

          <ScalableTextField 
        param={{id : 'yoo',
          border:{
               border : '3px solid rgb(255,69,0)'
            },
          variant:'filled',
          label:'name',
          color:"warning",
          default:'Hey!!!',
          inputStyles:{fontFamily: 'Shizuru',color:'rgba(100,0,0,1)'},
          inputLabelStyles:{fontFamily: 'Droid Sans'}}}/>
          </div>
  );
}

export default App;
