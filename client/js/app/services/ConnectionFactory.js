var stores = ['negociacoes'];
var version = 3;
var dbName = 'negociacoes';

class ConnectionFactory
{
    constructor()
    {
        throw new Error('Esta classe não pode ser instanciada. (Static class)');
    }

    static getConnection()
    {
        return new Promise((resolve, reject) => {
            let openRequest = window.indexedDB.open(dbName, version);
            openRequest.onupgradeneeded = e => {

            };

            openRequest.onsuccess = e => {

            };

            openRequest.onerror = e => {

            };
        });
    }
}