console.log("background.js working")


chrome.commands.onCommand.addListener(async (command) => {
    console.log(`Command: ${command}`); //working
     if(command === "run-foo")
     {
      let [tab] = await chrome.tabs.query({active: true, currentWindow: true})
      await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: colorSelectedText
      })
     }// end of "run-foo"
  });

function colorSelectedText(){
    console.log("working")
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

    // insertToDb()

    // function insertToDb(){
    //        //! indexedDB part
    // window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    // window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    // window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    // if(window.indexedDB){console.log("Db created")}else {console.log("db is not supported")}

    
    // let request = window.indexedDB.open("QuizQuestDatabase" , 1),db,tx,store,indexedDB

    // request.onupgradeneeded = fucntion(e) {
    //     let db = request.result
    //     store = db.createObjectStore("QuestionStore" , {keyPath:"qID"})
    //     index = store.createInxdex("questionText" , "questionText" , {unique:false})
    // }

    // request.onerror = function(e){console.log("There was an error: " + e.target)}

    // request.onsuccess = fucntion (e) {
    //     db = request.result
    //     tx = db.transaction("QuestionStore","readwrite")
    //     store = tx.objectStore("QuestionStore")
    //     index = store.index("questionText")

    //     db.onerror = function(e){console.log("error with the db onsuccess: " + e.target)}
    //     store.put({qID: 1 , questionText:"The sky is blue",correctAnswer:true , studentAnswer:true, result:true })
    //     store.put({qID: 2 , questionText:"The grass is green",correctAnswer:true , studentAnswer:true, result:true })
    // }

    // tx.oncomplete = fucntion()
    // {
    //     db.close()
    // }
    
}
     
                                                



   


