import {Pool} from  'pg'
import {drizzle} from 'drizzle-orm/node-postgres'
import {config} from "../config/config";



const pool = new Pool({
    connectionString:config.DATABASE_CONNECTION
    
})