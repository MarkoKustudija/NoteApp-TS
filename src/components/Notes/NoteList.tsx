import NoteItem from "./NoteItem";
import { Note } from "../../App";

export type NoteListProps = {
  notes: Note[] | undefined;
  onDeleteNote?: (noteId: number) => void;
};

function NoteList({ notes, onDeleteNote }: NoteListProps) {
  // const [notes, setNotes] = useState<Note[]>([]);

  if (!notes) {
    return null;
  }

  return (
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <NoteItem note={note} onDeleteNote={onDeleteNote} />
          </li>
        ))}
      </ul>
  );
}

export default NoteList;
