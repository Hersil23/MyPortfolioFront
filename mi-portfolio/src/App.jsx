import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-8">
          Portfolio Test
        </h1>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            count is {count}
          </button>
          <p className="text-gray-300 mt-4">
            Si ves este texto en gris sobre fondo oscuro y el botón azul, 
            <span className="text-blue-400 font-semibold"> Tailwind funciona perfectamente!</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App