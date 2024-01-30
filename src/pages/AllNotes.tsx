import NoteList from "../components/Notes/NoteList";
import { Note } from "../App";
import { json, useLoaderData } from "react-router-dom";

function NotesPage() {

  const data = useLoaderData() as Note[];

  return(
    <NoteList notes={data}  />
  )
}
export default NotesPage;

export async function loader() {

  const response = await fetch('http://localhost:8080/notes');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch notes.' },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}


