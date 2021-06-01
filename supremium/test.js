const JasonDB = require('./jason');

const main = async () => {

    const myDb = new JasonDB('bruh.json');

    const Users = await myDb.collection('users');
    console.log('start:', Users.db.db);

    const insert = await Users.insertOne({username: 'testuser', password: '1234'});
    console.log('insert:', insert);

    await Users.db.save();
    console.log('save:', Users.db.db);
    await Users.db.load();
    console.log('load:', Users.db.db);


}

main();
