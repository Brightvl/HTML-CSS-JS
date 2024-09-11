import './App.css'
import Greeting from "./component/Greeteng";
import CurrentTime from "./component/CurrentTime/CurrentTime"; //чтобы был красивый импорт добавили index js

function App() {
    return <div>
        <Greeting/>
        <CurrentTime/>
    </div>
}

export default App
