import { Box, Button } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Joke = () =>{

    const [joke, setJoke] = useState('')

    useEffect(() =>{
        getJoke()
    },[])
    
    const getJoke = async () =>{
        const settings = {
            async: true,
            url: "https://icanhazdadjoke.com/",
            method: "GET",
            headers: {
            Accept: `application/json`,
            },
        };

        try {
            const { data } = await axios(settings);
            setJoke(data.joke)
        } catch (error) {
            setJoke('Error fetching joke...')
        }

        
    }
    
    return (
        <>
        <Box>{joke}</Box>
        <Button onClick={getJoke}>Another</Button>
        </>
    )
}

export default Joke