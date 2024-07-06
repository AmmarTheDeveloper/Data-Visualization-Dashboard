import axios from "axios";

export async function fetchData ( setData ) {

    try {
        let response = await axios.get( "http://localhost:5000/getdata" );
        setData( response.data );
    } catch ( error ) {
        console.log( error );
        setData( [] );
    }

}