import app from './app';
import { startconnection } from "./database";

async function main() {
    startconnection();
    await app.listen(app.get('port'));
    console.log('Server on port',app.get('port'));
}

main();

