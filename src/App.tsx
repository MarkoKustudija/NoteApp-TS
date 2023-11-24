import { useState } from "react";
import "./App.css";
import NoteForm from "./components/Notes/NoteForm";
import NoteList from "./components/Notes/NoteList";
import MainHeader from "./components/Layout/MainHeader";
import noteImg from "./assets/note.jpeg"

export type Note = {
  id: number;
  title: string;
  content: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNoteHandler = (title: string, content: string) => {
    setNotes((prevNotes) => {
      const newNote: Note = {
        id: Math.random(),
        title: title,
        content: content,
      };

      return [...prevNotes, newNote];
    });
  };

  const deleteNoteHandler = (noteId: number) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== noteId;
      });
    });
  };
  return (
    <>
      <main>
        <MainHeader image={{ src: noteImg, alt: "A list of notes" }}>
          <h1>Your Note </h1>
        </MainHeader>
        <NoteForm onAddNote={addNoteHandler} />
        <NoteList notes={notes} onDeleteNote={deleteNoteHandler} />
      </main>
    </>
  );
}

export default App;
