import { config } from 'dotenv';
import * as path from 'path';

config({
    path: path.resolve('../.env'),
});

function env(name: string): string {
    const value = process.env[name]?.trim();

    if (!value) {
        throw new Error(`Environment variable "${ name }" must be defined`);
    }

    return value;
}

export let uri: string;

uri = process.env['TOURNAMENT_MONGO_URL']?.trim();

if (!uri) {
    const username = env('TOURNAMENT_MONGO_USERNAME');
    const password = env('TOURNAMENT_MONGO_PASSWORD');
    const database = env('TOURNAMENT_MONGO_DATABASE');
    const protocol = env('TOURNAMENT_MONGO_PROTOCOL');
    const host = env('TOURNAMENT_MONGO_HOST');

    uri = `${ protocol }://${ username }:${ password }@${ host }/${ database }`;
}
export const allowedOrigins = [ 'http://localhost:3000', 'http://localhost:4200' ];
