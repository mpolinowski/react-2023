import './App.css'
import ClassyComponent from './components/HelloThere'
import SelfIntroduction from './components/Introduction'
import Image from './components/MotherChild'
import PaintingCollection from './components/Conditional'
import ListOfAliases from './components/Loop'
import EventCatcher from './components/Event'
import EventCatcher2 from './components/Event2'
import Stateful from './components/StateHook'
import Timer from './components/Lifecycle'
import ContextApi from './components/Context'
import CaughtError from './components/ErrorBoundry'

function App() {

  return (
    <div className="App">
      
      <div className="card">
        <ClassyComponent />
        <SelfIntroduction />
        <Image />
      </div>

      <div className="card">
        <PaintingCollection />
      </div>

      <div className="card">
        <ListOfAliases />
        <EventCatcher />
        <EventCatcher2 />
      </div>

      <div className="card">
        <Stateful />
      </div>

      <div className="card">
        <Timer />
      </div>

      <div className="card">
        <ContextApi />
      </div>

      <div className="card">
        <CaughtError />
        <img src='/yeeees.gif' />
      </div>
    </div>
  )
}

export default App
