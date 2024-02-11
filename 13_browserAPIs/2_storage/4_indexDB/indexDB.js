

// 4. IndexedDB

// Open (or create) a database
const request = indexedDB.open("myDatabase", 1);

// Handle database creation/upgrading
request.onupgradeneeded = function (event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore("store", { keyPath: "id" });
};

// Handle database opening success
request.onsuccess = function (event) {
  const db = event.target.result;

  // Start a new transaction
  const transaction = db.transaction(["store"], "readwrite");

  // Get the object store
  const objectStore = transaction.objectStore("store");

  // Add data to the store
  objectStore.add({ id: 1, name: "John" });

  // Get data from the store
  const getRequest = objectStore.get(1);
  getRequest.onsuccess = function (event) {
    console.log(event.target.result);
  };

  // Remove data from the store
  const deleteRequest = objectStore.delete(1);
  deleteRequest.onsuccess = function (event) {
    console.log("Data deleted");
  };
};

// Handle database errors
request.onerror = function (event) {
  console.error("Database error: " + event.target.errorCode);
};
