import React from "react";
import NoteItem from "./NoteItem";
import { Note } from "../../App";

type NoteListProps = {
  notes: Note[];
  onDeleteNote: (noteId: number) => void;
};

function NoteList({ onDeleteNote , notes }: NoteListProps) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <NoteItem
            id={note.id}
            title={note.title}
            content={note.content}
            onDeleteNote={onDeleteNote}
          />
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
