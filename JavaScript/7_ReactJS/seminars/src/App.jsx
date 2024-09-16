// S3
import './App.css'
import Greeting from "./component/S3/Greeteng/index.js";
import {Counter} from "./component/S3/Counter/Counter.jsx";
import {MessagesList} from "./component/S3/MessagesList/MessagesList.jsx";
import {TextDisplayForm} from "./component/S3/TextDisplayForm/TextDisplayForm.jsx";
import {ThemeSwitcher} from "./component/S3/ThemeSwitcher/ThemeSwitcher.jsx";

const msgList = [
    {id: 1, text: "Hello World!"},
    {id: 2, text: "Hello World!"},
    {id: 3, text: "Hello World!"},
];
const App = () => (
    <div className="container">
        <Greeting name='Ярослав'/>
        <Counter/>
        <MessagesList messages={msgList}/>
        <TextDisplayForm/>
        <ThemeSwitcher/>
    </div>
)


export default App


// S2
/*import './App.css'
import {Counter} from "./component/S2/Counter/Counter.jsx";
import {TextInput} from "./component/S2/TextInput/TextInput.jsx";
import {TodoList} from "./component/S2/TodoList/TodoList.jsx";
import {RealtimeClock} from "./component/S2/RealtimeClock/RealtimeClock.jsx";
import {Timer} from "./component/S2/Timer/Timer.jsx";

const App = () => (
    <div className="container">
        <RealtimeClock/>
        <Counter/>
        <TextInput/>
        <TodoList title='Комменатрии'/>
        <Timer/>
    </div>
)


export default App*/


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