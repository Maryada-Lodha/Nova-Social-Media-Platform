import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import SignInForm from './_auth/forms/SignInForm'
import SignUpForm from './_auth/forms/SignUpForm'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'

import './global.css'

const App = () => {
  return (
    <BrowserRouter>
      <main className='flex h-screen'>
        <Routes>

          {/* public routes - for those not signed in*/}
          
          <Route element={<AuthLayout />}>
            <Route path='/sign-in' element={<SignInForm />} />
            <Route path='sign-up' element={<SignUpForm />} />
          </Route>

          {/* private routes - for those signed in */}
          
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>

        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App