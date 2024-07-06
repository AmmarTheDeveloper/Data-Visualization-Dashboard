import { BASE_URL } from "@/path";
import axios from "axios";

export async function fetchData ( setData ) {

    try {
        let response = await axios.get( BASE_URL + "/getdata" );
        console.log( response )
        setData( response.data );
    } catch ( error ) {
        console.log( error );
        setData( [] );
    }

}