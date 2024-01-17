import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserContext'

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main app</h1>
      <Navbar />
      <hr />

      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="login" element={<LoginPage/>}/>

        {/* <Route path="/*" element={<LoginPage/>}/> */}
        <Route path="/*" element={<Navigate to="login"/>}/>
      </Routes>
    </UserProvider>
  )
}
