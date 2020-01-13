var fs = require('fs');

module.exports = {
    dbManager:function(){
        this.dbName='';
        this.initDB=(dbName)=>{
            try{
                this.db = JSON.parse(fs.readFileSync(dbName));
                this.dbName = dbName;
            } catch (error) {
                console.log('Error initializing db ' + error);
            }
        };
        this.db = {};
        this.test = () => {
            console.log(JSON.stringify(this.db));
        };
        this.save = () => {
            fs.writeFile(this.dbName, JSON.stringify(this.db), (err) => {
                if (err) throw err;
                console.log('Data written to file');
            })
        };
        this.addCollection = (collectionName, needSave = false) => {
            try {
                this.db[collectionName] = [];
                if(needSave){
                    this.save();
                }
            } catch (error) {
                console.log('Adding collection error '+error);
            }
        };
        this.removeCollection = (collectionName, needSave = false) => {
            try {
                delete this.db[collectionName];
                if(needSave){
                    this.save();
                }
            } catch (error) {
                console.log('Error removing collection '+error);
            }
        };
        this.addDocuments = (collectionName,documents, needSave = false) => {
            this.db[collectionName].push(documents);
            if(needSave){
                this.save();
            } 
        };
        this.removeDocuments = (collectionName,filterLeaving, filterRemoving, needSave = false) => {
            try {
                if(filterLeaving != null){
                    var collection = db[collectionName];
                    this.db[collectionName] = filterLeaving(collection);
                }else if(filterRemoving != null){
                    var collection = db[collectionName];
                    this.db[collectionName] = filterRemoving(collection);
                }
                if(needSave){
                    this.save();
                }
            } catch (error) {
                console.log('Error removing document '+error);
            }
        };
        this.editDocuments = (collectionName,filterEditing, needSave = false) => {
            try {
                filterEditing(this.db[collectionName]);
            } catch (error) {
                console.log('Error editig documents '+error);
            }
        };
        this.getDocuments = (collectionName) => {
            try {
                return this.db[collectionName];
            } catch (error) {
                console.log('Error getting documents ' + error);
            }
        }
    }
    
}
