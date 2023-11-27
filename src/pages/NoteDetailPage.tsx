/* eslint-disable no-throw-literal */
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import NoteItem from "../components/Notes/NoteItem";

function NoteDetail() {

  const data = useRouteLoaderData("note-detail") as {
    id: number;
    title: string;
    content: string;
  };

  const note = {
    id: data.id,
    title: data.title,
    content: data.content,
  };

  return <NoteItem note={note} />;
}

export default NoteDetail;

export async function loader(params: any) {
  const id = params.id;

  const response = await fetch(`http://localhost:8080/notes/` + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected note." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}


export async function action(params: any) {
  const noteId = params.id;
  const response = await fetch("http://localhost:8080/notes/" + noteId, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete note." },
      {
        status: 500,
      }
    );
  }
  return redirect("/notes");
}  
