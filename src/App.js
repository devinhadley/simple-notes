import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Notes from './components/Notes'
import TextRegion from './components/TextRegion'

const notes_default =   


[

    {

        "title": "Note #1",
        "content": "Note #1 content.",
        "id": 0

    },

    {

        "title": "Note #2",
        "content": "Note #2 content.",
        "id": 1

    }] 

if (localStorage.getItem('notes_data') === null){

        localStorage.setItem('notes_data', JSON.stringify(notes_default))
        localStorage.setItem('id_safe_count', 1)

    } 
    
const storage = JSON.parse(localStorage.getItem('notes_data'))

const App = () =>  {

    const[notes, setNotes] = useState(storage)

    console.log(notes)

    const [currentContent, setCurrentContent] = useState({'title': 'Simple Notes', 'content': 'Press a note to display it.', 'id': -1})
	
	const openNote = (id) => {

        notes.forEach(note => note.id == id && setCurrentContent(note))


	}

    const saveNote = (e,id, formData) => { // Updates object content in object array.

        e.preventDefault()

        if (id == -1){
            alert('Cant save default')
            return
        }

        
        let modified_storage = notes 

        notes.forEach(note => note.id == id && (modified_storage[notes.indexOf(note)]['content'] = formData )) 
        
        setNotes(modified_storage)

        localStorage.setItem('notes_data', JSON.stringify(modified_storage))

    } 

    const saveTitle = (e, id, formData) => { //Updates object title in object array.
    
        e.preventDefault() 
        if (id == -1){
            alert('Cant change title of default')
            return

        }
        

        let modified_storage = notes

        let active_note_index 

        notes.forEach((note, i) => note.id == id && (active_note_index = i)) 

        modified_storage[active_note_index]['title'] = formData

        setNotes(modified_storage)

        localStorage.setItem('notes_data', JSON.stringify(modified_storage))

    }

   const addNote = () => {


       const temp_notes = notes

       const last_id = parseInt(localStorage.getItem('id_safe_count')) + 1 // Maintains that id is a unique identifier. 

       temp_notes.push({'title': 'New Note', 'content': '', 'id': last_id})

       setNotes(temp_notes)

       localStorage.setItem('notes_data', JSON.stringify(temp_notes))

       localStorage.setItem('id_safe_count', last_id)

       setCurrentContent(notes[notes.length - 1]) // Instead get last element in array.


   } 

    const removeNote = (id) => { // Still need to integrate into UI 
        console.log("hello")

        const temp_notes = notes 

        let active_note_index 

        notes.forEach((note, i) => note.id == id && (active_note_index = i)) 
        
        temp_notes.splice(active_note_index, 1)

        setNotes(temp_notes)

		localStorage.setItem('notes_data', JSON.stringify(temp_notes))
        
        setCurrentContent({'title': 'Simple Notes', 'content': 'Press a note to display it.', 'id': -1}) 


    }

    const [showDelete, setShowDelete] = useState(false)
	
    return (

      <div>
        <div className="sidenav">

            <Notes removeNote={removeNote} showDelete={showDelete} toggleContent={openNote} data={notes}/>
            <center><button onClick={addNote} className="btn btn-outline-success mb-2">Add Note</button></center>
            <center><button onClick={() => setShowDelete(!showDelete)} className={!showDelete ? "btn btn-sm btn-outline-danger mb-2": "btn btn-sm btn-outline-primary mb-2"}>Toggle Delete</button></center>
            

		</div>

        <TextRegion className="center" saveNote={saveNote} saveTitle={saveTitle} updateContent={setCurrentContent} activeNote={currentContent}/>

      </div>
    );
}

export default App;
