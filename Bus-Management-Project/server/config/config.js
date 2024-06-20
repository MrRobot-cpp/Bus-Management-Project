export const PORT = 3030;

export const mongoDBURL = 
"mongodb+srv://ahmed:xhWuQBRBHAp2ZyBf@transportationdb.vx6feo9.mongodb.net/trips-collection?retryWrites=true&w=majority&appName=TransportationDB";


const crypto = require('crypto');

// Generate a random string of 32 bytes (256 bits)
export const SECRET_KEY = crypto.randomBytes(32).toString('base64');
