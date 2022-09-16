import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  console.log("PUT to database");

  //create connection to the database and specify the version to use.
  const jateDB = await openDB("jate", 1);

  // Create a transaction and specify the store and data privileges
  const tx = jateDB.transaction("jate", "readwrite");

  //open up our object store
  const store = tx.objectStore("jate");

  //use our .put method to pass in content
  const request = store.put({
    id: id,
    content: content,
  });

  //Get confirmation of the request
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error("getDb not implemented");

initdb();
