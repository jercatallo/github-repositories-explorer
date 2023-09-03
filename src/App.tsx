import './index.css'
import AppRoutes from './routes/router.jsx'
import Translations from './components/Translations/index.js';

function App() {
  return (
    <>
     <Translations>
        <AppRoutes />

     </Translations>
    </>
  )
}

export default App
