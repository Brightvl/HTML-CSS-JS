import './App.css'
import {Counter} from "./component/S2/Counter/Counter.jsx";
import {TextInput} from "./component/S2/TextInput/TextInput.jsx";

const App = () => (
    <div className="container">
        <Counter/>
        <TextInput/>
    </div>
)


export default App


/* S1
import './App.css'
import Greeting from "./component/S1/Greeteng";
import CurrentTime from "./component/S1/CurrentTime/CurrentTime";
import {EventCard} from "./component/S1/EventCard/EventCard.jsx"; //чтобы был красивый импорт добавили index js

function App() {
    return <div>
        <Greeting/>
        <CurrentTime/>
        <EventCard name="Bright" date={new Date().toLocaleDateString()} location={'msk'} />
    </div>
}

export default App
*/