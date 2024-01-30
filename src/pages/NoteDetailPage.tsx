/* eslint-disable no-throw-literal */
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import NoteItem, { NoteItemProps } from "../components/Notes/NoteItem";
import { Note } from "../App";



function NoteDetail() {
  
  const data = useRouteLoaderData("note-detail") as Note;

  const note = {
    title: data.title,
    content: data.content,
  };

  return <NoteItem note={note} />;
}

export async function loader({ params }: any) {
  const id = params.id;

  console.log(id);

  if (id === undefined) {
    throw json(
      { message: "Note ID is undefined." },
      {
        status: 400, // Bad Request
      }
    );
  }


  const response = await fetch("http://localhost:8080/notes/" + id);

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

export async function action({params}: any) {
  const noteId = params.id;
  const response = await fetch("http://localhost:8080/notes/" + noteId, {
    // method: request.method,
    method: "DELETE",
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

export default NoteDetail;
