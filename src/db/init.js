const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database() // O await garante que o BD carregue antes do código executar a próx. linha 
                                    // O await só funciona junto do async e vice-versa    
        await db.exec(`CREATE TABLE rooms (
                id INTEGER PRIMARY KEY,
                pass TEXT
            )`);
        
        await db.exec(`CREATE TABLE questions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                read INT,
                room INT
            )`);
        
        await db.close()
    }
}

initDb.init();