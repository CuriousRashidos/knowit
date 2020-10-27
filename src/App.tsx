import React, { useEffect, useState } from 'react';
import { Flashcard } from './components/Flashcard';
import Grid from '@material-ui/core/Grid';
import { Grow } from '@material-ui/core';
import AddCard from './components/AddCard';
import './App.css'

const sampleData = [
  {id:1, title: "Rashid", desc: "is a big noob" },
  {id:2, title: "Faheem", desc: "dont even say that" },
  {id:3, title: "Osama", desc: "get me my milk"},
]

function App() {
  const [loading, setLoading] = React.useState(true)
  useEffect(() => {
  })
return (
      
  <div className="app">
        <AddCard />
      
     <Grid container
  direction="row"
  justify="center"
    alignItems="center"
      spacing={3}
  >
    <Grow
          in={loading}
          style={{ transformOrigin: '0 0 0' }}
          {...(loading ? { timeout: 1000 } : {})}
        
    >
      
      <Grid item >
      <Flashcard id={sampleData[0].id} desc={sampleData[0].desc} title={sampleData[0].title} />
      </Grid>
  </Grow>
    <Grow
          in={loading}
          style={{ transformOrigin: '0 0 0' }}
          {...(loading ? { timeout: 1000 } : {})}
        
    >
  
    <Grid item>
        <Flashcard />
        </Grid>
  </Grow>
     <Grow
          in={loading}
          style={{ transformOrigin: '0 0 0' }}
          {...(loading ? { timeout: 1500 } : {})}
        
    >
  
    <Grid item >
        <Flashcard />
      </Grid>
      </Grow>
       <Grow
          in={loading}
          style={{ transformOrigin: '0 0 0' }}
          {...(loading ? { timeout: 1500 } : {})}
        
    >
  
    <Grid item >
        <Flashcard />
      </Grid>
      </Grow>

      
    </Grid >   
    </div>
      
    
  );
}

export default App;
