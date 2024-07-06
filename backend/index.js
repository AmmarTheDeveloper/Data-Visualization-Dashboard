const express = require( 'express' );
const app = express();
const mongoose = require( "mongoose" );
const insights = require( './model/insights' );
require( 'dotenv' ).config();
const cors = require( 'cors' );

mongoose.connect( process.env.DB_URL );
app.use( cors() );

app.get( "/getdata", async ( req, res ) => {

    try {
        let data = await insights.find().limit( 30 );
        res.status( 200 ).json( data );
    } catch ( error ) {
        res.status( 500 ).json( { message: "Internal server error" } )
    }

} )

app.listen( 5000 );

