import dotenv from "dotenv"

if(process.env.NODE_ENV !== "prod" ) {
    const configFile : string = `.env.${process.env.NODE_ENV}`;
    dotenv.config({path : configFile});
} 
else {
    dotenv.config();
}

module.exports = {
    PORT : process.env.PORT ,
    DB_URL : process.env.DB_URL
}