import React from 'react'

import './SignIn.css'
import quill from './quill.svg'
import googleLogo from './google.svg'
import githubLogo from './githubLogo.svg'
import { auth, googleProvider, githubProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div className="SignIn">
      <header className="Header">
        <img src={quill} alt="" />
        <span className="title">Noteherder</span>
      </header>
      <main>
        <h3>Hey, Nerd! You Like Notes?</h3>
        <p>You never know when you'll need to write crap down. In fact, you should probably be taking notes right now.</p>
        <button
          className="github"
          onClick={() => authenticate(githubProvider)}
        >
          <img src={githubLogo} alt="" />
          Sign in with Github
        </button>
        <button
          className="google"
          onClick={() => authenticate(googleProvider)}
        >
          <img src={googleLogo} alt="" />
          Sign in with Google
        </button>
      </main>
    </div>
  )
}

export default SignIn