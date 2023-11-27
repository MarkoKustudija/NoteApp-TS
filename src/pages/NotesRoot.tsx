import { Outlet } from 'react-router-dom'
import NotesNavigation from '../components/Layout/NotesNavigation';


function NotesRootLayout() {
  return (
    <>
    <NotesNavigation />
    <Outlet />
  </>
  )
}

export default NotesRootLayout