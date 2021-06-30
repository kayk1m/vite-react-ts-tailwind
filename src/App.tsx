import React, { useState } from 'react';

import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="flex flex-col items-center justify-center min-h-screen text-white bg-[#282c34] text-3xl">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-spin-slow motion-reduce:animate-none"
          alt="logo"
        />
        <p className="text-red-500">Hello Vite + React!</p>
        <p>
          <button
            className="text-3xl hover:underline"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates. (fixed)
        </p>
        <p>
          <a
            className="text-[#61dafb]"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-[#61dafb]"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
