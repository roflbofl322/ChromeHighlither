import Dexie from "/node_modules/dexie/dist/modern/dexie.min.mjs"
// try {
//   importScripts('dexie.min.mjs' /*, and so on */);
// } catch (e) {
//   console.log(e);
// }

// function insertToDb(){
//     //! indexedDB part
// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
// window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// if(window.indexedDB){console.log("Db created")}else {console.log("db is not supported")}


// let request = window.indexedDB.open("QuizQuestDatabase" , 1),db,tx,store,indexedDB

// request.onupgradeneeded = function(e) {
//  let db = request.result
//  store = db.createObjectStore("QuestionStore" , {keyPath:"qID"})
//  index = store.createIndex("questionText" , "questionText" , {unique:false})
// }

// request.onerror = function(e){console.log("There was an error: " + e.target)}

// request.onsuccess = function (e) {
//  db = request.result
//  tx = db.transaction("QuestionStore","readwrite")
//  store = tx.objectStore("QuestionStore")
//  index = store.index("questionText")

//  db.onerror = function(e){console.log("error with the db onsuccess: " + e.target)}
//  store.put({qID: 1 , questionText:"The sky is blue",correctAnswer:true , studentAnswer:true, result:true })
//  store.put({qID: 2 , questionText:"The grass is green",correctAnswer:true , studentAnswer:true, result:true })
// }

// tx.oncomplete = ()=>
// {
//  db.close()
// }
// } //end of insert into DB
// insertToDb()

var db = new Dexie("FriendDatabase");