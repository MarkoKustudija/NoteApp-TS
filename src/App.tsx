import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import AllNotes from "./pages/AllNotes";
import AddNotePage from "./pages/AddNotePage";
import HomePage from "./HomePage";
import { action as manipulateNoteAction } from "./components/Notes/NoteForm";
import NotesRootLayout from "./pages/NotesRoot";
import NoteDetail, {
  loader as noteDetailLoader,
} from "./pages/NoteDetailPage";
import EditNotePage from "./pages/EditNotePage";
import ErrorPage from "./pages/ErrorPage";

export type Note = {
  id: number;
  title: string;
  content: string;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "notes",
        element: <NotesRootLayout />,
        children: [
          {
            index: true,
            element: <AllNotes />,
            // loader: notesLoader,
          },

          {
            path: ":id",
            id: "note-detail",
            loader: noteDetailLoader,
            children: [
              {
                index: true,
                element: <NoteDetail />,
              },
              {
                path: "edit",
                element: <EditNotePage />,
                action: manipulateNoteAction,
              },
            ],
          },
          { path: "new", element: <AddNotePage />, action: manipulateNoteAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
