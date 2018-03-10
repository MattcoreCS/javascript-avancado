var ConnectionFactory = (function() {

    var stores = ['negociacoes'];
    var version = 3;
    var dbName = 'negociacoes';

    var connection = null;

    return class ConnectionFactory {
        constructor() {
            throw new Error('Esta classe não pode ser instanciada. (Static class)');
        }

        static getConnection() {
            return new Promise((resolve, reject) => {
                let openRequest = window.indexedDB.open(dbName, version);
                openRequest.onupgradeneeded = e => {
                    ConnectionFactory._createStores(e.target.result);
                };

                openRequest.onsuccess = e => {
                    if (!connection)
                        connection = e.target.result;

                    resolve(e.target.result);
                };

                openRequest.onerror = e => {
                    console.log(e.target.error);
                    reject(e.target.error.name);
                };
            });
        }

        static _createStores(connection) {
            stores.forEach(store => {
                if (connection.objectStoreNames.contains(store))
                    connection.deleteObjectStore(store);

                connection.createObjectStore(store, {autoIncrement: true});
            });
        }
    }
})();