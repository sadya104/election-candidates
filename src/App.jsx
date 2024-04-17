import NavBar from './components/Navbar'
import Card from './components/Card'
import List from './components/List'
import "/App.css";


function App() {

  return (
    <div className='app'>
    <NavBar />
    <h2 className='app-header'>People</h2>
    <List />


    </div>
  )
}

export default App
