import './App.css'
import Greeting from "./component/Greeteng";
import CurrentTime from "./component/CurrentTime/CurrentTime";
import {EventCard} from "./component/EventCard/EventCard.jsx"; //чтобы был красивый импорт добавили index js

function App() {
    return <div>
        <Greeting/>
        <CurrentTime/>
        <EventCard name="Bright" date={new Date().toLocaleDateString()} location={'msk'} />
    </div>
}

export default App
