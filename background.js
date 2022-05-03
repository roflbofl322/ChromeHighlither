// import Dexie from "./node_modules/dexie/dist/modern/dexie.min.mjs"
// try {
//   importScripts('dexie.min.mjs' /*, and so on */);
// } catch (e) {
//   console.log(e);
// }
import Dexie from "/node_modules/dexie/dist/modern/dexie.min.mjs"
console.log("background.js working")
// console.log(Dexie)




chrome.commands.onCommand.addListener(async (command) => {
  
    console.log(`Command: ${command}`); //working
     if(command === "run-foo")
     {
      let [tab] = await chrome.tabs.query({active: true, currentWindow: true})
      await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: colorSelectedText,
        args: [{Dexie}]
      })
     }// end of "run-foo"
  });

function colorSelectedText(mydb){
  
  let selection = document.getSelection()
  // console.log(selection)
  
  if(selection.rangeCount)
  {
    const replacement = document.createElement("mark")
    replacement.textContent = selection.toString()
    let range = selection.getRangeAt(0)
    range.deleteContents()
    range.insertNode(replacement)
  }

  console.log(mydb)
  
  // db.version(1).stores({
  //   friends: `
  //   id,
  //   name,
  //   age`,
  // });
  
  // // Now add some values.
  // db.friends.bulkPut([
  //   { id: 1, name: "Josephine", age: 21 },
  //   { id: 2, name: "Per", age: 75 },
  //   { id: 3, name: "Simon", age: 5 },
  //   { id: 4, name: "Sara", age: 50, notIndexedProperty: 'foo' }
  // ]).then(() => {
    
  //   console.log("working from db")
  //     return db.friends.where("age").between(0, 25).toArray();

  //   }).then(friends => {

  //     alert("Found young friends: " +
  //       friends.map(friend => friend.name));

  //     return db.friends
  //       .orderBy("age")
  //       .reverse()
  //       .toArray();

  //   }).then(friends => {

  //     alert("Friends in reverse age order: " +
  //       friends.map(friend => `${friend.name} ${friend.age}`));

  //     return db.friends.where('name').startsWith("S").keys();

  //   }).then(friendNames => {

  //     alert("Friends on 'S': " + friendNames);

  //   }).catch(err => {

  //     alert("Ouch... " + err);

  //   });
  //   insertToDb()

  //   function insertToDb(){
  //          //! indexedDB part
  //   window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  //   window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
  //   window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
  //   if(window.indexedDB){console.log("Db created")}else {console.log("db is not supported")}

    
  //   let request = window.indexedDB.open("QuizQuestDatabase" , 1),db,tx,store,indexedDB

  //   request.onupgradeneeded = function(e) {
  //       let db = request.result
  //       store = db.createObjectStore("QuestionStore" , {keyPath:"qID"})
  //       index = store.createIndex("questionText" , "questionText" , {unique:false})
  //   }

  //   request.onerror = function(e){console.log("There was an error: " + e.target)}

  //   request.onsuccess = function (e) {
  //       db = request.result
  //       tx = db.transaction("QuestionStore","readwrite")
  //       store = tx.objectStore("QuestionStore")
  //       index = store.index("questionText")

  //       db.onerror = function(e){console.log("error with the db onsuccess: " + e.target)}
  //       store.put({qID: 1 , questionText:"The sky is blue",correctAnswer:true , studentAnswer:true, result:true })
  //       store.put({qID: 2 , questionText:"The grass is green",correctAnswer:true , studentAnswer:true, result:true })
  //   }

  //   tx.oncomplete = ()=>
  //   {
  //       db.close()
  //   }
  // } //end of insert into DB
}