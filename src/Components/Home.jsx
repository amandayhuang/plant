import React from 'react';
import { Box } from "@material-ui/core";
import './Home.css'



const Home = ({setValue}) => {

    const handleClick = (val) =>{
        setValue(val)
    }

    return (
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        height="100%"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          className="box"
        >
          <Box display="flex" >
            <Box className="button" onClick={() => handleClick(1)}>tell me a joke</Box>
            <Box className="button" onClick={() => handleClick(2)}>ask me a question</Box>
          </Box>
          <Box display="flex" >
            <Box className="button" onClick={() => handleClick(3)}>teach me something</Box>
            <Box className="button" onClick={() => handleClick(4)}>show me something</Box>
          </Box>
        </Box>
      </Box>
    );
}

export default Home