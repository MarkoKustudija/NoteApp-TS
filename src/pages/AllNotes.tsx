import React, { useEffect, useState } from "react";
import NoteList from "../components/Notes/NoteList";
import { Note } from "../App";
import { redirect, json} from "react-router-dom";

function NotesPage() {
  
  const [data, setData] = useState<Note[] | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/notes");
        if (!response.ok) {
          throw new Error("Could not fetch notes.");
        }
        const jsonData = await response.json();
        setData(jsonData as Note[]);
      } catch (error) {
        setError("Could not fetch notes");
      }
    };

    fetchData();
  }, []);

  const deleteNoteHandler = async (noteId: number) => {
    try {
      const response = await fetch(`http://localhost:8080/notes/${noteId}`, {
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
    } catch (error) {
      setError("Could not delete note");
    }

  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data ? (
        <NoteList notes={data} onDeleteNote={deleteNoteHandler} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );

  // const data = useLoaderData() as Note[];
  // return(
  //   <NoteList notes={data}  />
  // )
}
export default NotesPage;

// export async function loader() {

//   const response = await fetch('http://localhost:8080/notes');

//   if (!response.ok) {
//     throw json(
//       { message: 'Could not fetch notes.' },
//       {
//         status: 500,
//       }
//     );
//   } else {
//     return response;
//   }
// }


