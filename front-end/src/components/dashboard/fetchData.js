import axios from "axios";

export async function fetchData ( setData ) {

    try {
        let response = await axios.get( process.env.BASE_URL + "/getdata" );
        setData( response.data );
    } catch ( error ) {
        console.log( error );
        setData( [] );
    }

}