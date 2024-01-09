import "dotenv/config";
import { cleanEnv } from 'envalid';
import { port, str } from 'envalid/dist/validators';


const ENV = cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(),
    PORT: port(),
});

export default ENV

