const admin = require('firebase-admin');
const serviceAccount = require('../config/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //   storageBucket: 'your-project-id.appspot.com'
});

const db = admin.firestore();
// const bucket = admin.storage().bucket();

// module.exports = { db, bucket };
module.exports = { db };
