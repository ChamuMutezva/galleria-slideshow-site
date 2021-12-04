import { useState, createContext, useEffect } from 'react'
import axios from 'axios'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [data, setData] = useState([])
    const [startSlide, setStartSlide] = useState(false)
    
    //get data from json api
    const getData = async () => {
        await axios.get('/data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )

            .then(function (response) {
                return response.data;
            })

            .then(function (myJson) {
                setData(myJson)
            });

    }

    const getOne = (id) => {    
      return data.find(target => target.id === parseInt(id, 10))
    }

    const isReady = () => {
        return data.length > 0
    }

    const slide = () => setStartSlide(!startSlide)

    useEffect(() => {
        getData()        
    }, []) 
    

    return (
        <DataContext.Provider value={{startSlide, data, getOne, slide, isReady }}>
            {props.children}
        </DataContext.Provider>
    )
}