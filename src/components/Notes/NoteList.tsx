import { Link } from "react-router-dom";
import { Note } from "../../App";

export type NoteListProps = {
  notes: Note[];
  onDeleteNote?: (noteId: number) => void;
};

function NoteList({ notes }: NoteListProps) {
  if (!notes) {
    return null;
  }
  console.log(notes);

  return (
    <div>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              <Link to={`/notes/${note.id}`}>
                <div>
                  <h2>Title : {note.title}</h2>
                  <h2>Content: {note.content}</h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NoteList;
