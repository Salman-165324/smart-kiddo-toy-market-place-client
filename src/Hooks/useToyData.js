import { useQuery } from "@tanstack/react-query"
import axios from "axios";


const useToyData = (category) =>{

    const {data:toyData = [], error, isLoading, refetch} = useQuery({

        queryKey: ['toyData'], 
        queryFn: async () =>{
            
            try{
                const response = await axios.get(`https://server-side-toy-marketplace.vercel.app/searchByCategory?category=${category}`, {
                    timeout: 10000,
                }); 
                const data = response.data; 
                return data; 

            }catch(error){

                console.log("Request Failed to load toyData", error.message);
                throw error; 
            }
        },

        retry: 12
    })

    return [toyData, error, isLoading, refetch]

}

export default useToyData; 