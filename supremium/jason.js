const fs = require('fs');

const generateId = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for(let i = 0; i < length; i++) id += chars.charAt(Math.floor(Math.random() * chars.length));
    return id;
}

class JasonCollection {

    constructor(db, name, data) {
        this.db = db;
        this.name = name;
        this.data = data;
    }

    getData = () => this.data;

    findOne = async (query) => {
        await this.db.load();
        for(let i in this.data) {
            let valid = true;
            for(let j in query) {
                if(this.data[i][j] !== query[j]) {
                    valid = false;
                    break;
                };
            }
            if(valid) return this.data[i];
        }
    }

    insertOne = async (data) => {
        await this.db.load();
        const object = {_id: generateId(16), ...data};
        this.data.push(object);
        this.db.updateCollection(this.name, this.data);
        await this.db.save();
        return object;
    }

    updateOne = async (query, data) => {
        await this.db.load();
        for(let i in this.data) {
            let valid = true;
            for(let j in query) {
                if(this.data[i][j] !== query[j]) {
                    valid = false;
                    break;
                };
            }
            if(valid) {
                this.data[i] = {...this.data[i], ...data};
                return this.data[i];
            }
        }
        await this.db.save();
        return this.data[i];
    }

    replaceOne = async (query, data) => {
        await this.db.load();
        for(let i in this.data) {
            let valid = true;
            for(let j in query) {
                if(this.data[i][j] !== query[j]) {
                    valid = false;
                    break;
                };
            }
            if(valid) {
                this.data[i] = {_id: this.data[i]._id, ...data};
                return this.data[i];
            }
        }
        await this.db.save();
        return this.data[i];
    }

    deleteOne = async (query) => {
        await this.db.load();
        for(let i in this.data) {
            let valid = true;
            for(let j in query) {
                if(this.data[i][j] !== query[j]) {
                    valid = false;
                    break;
                };
            }
            if(valid) {
                this.data[i] = undefined;
            }
        }
        await this.db.save();
        return this.data[i];
    }

}

class JasonDB {

    constructor(filename) {
        this.filename = filename;
        this.db = [];
        this.load();
    }

    save = async () => {
        console.log(this.filename, JSON.stringify(this.db))
        await fs.promises.writeFile(this.filename, JSON.stringify(this.db));
    }

    load = async () => {
        try {
            const raw = await fs.promises.readFile(this.filename);
            this.db = JSON.parse(raw.toString());
        } catch(error) {
            console.error(`Error loading ${this.filename}, creating new`);
            console.error(error);
            await this.save();
            await this.load()
        }
    }

    collection = async (name) => {
        await this.load();
        if(this.db[name]) return new JasonCollection(this, name, this.db[name]);
        const collection = new JasonCollection(this, name, []);
        this.updateCollection(collection);
        return collection;
    }

    updateCollection = async (name, data) => {
        this.db[name] = data;
        await this.save();
    }

}

module.exports = JasonDB;
