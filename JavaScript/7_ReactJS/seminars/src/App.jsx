//S4
import s from './App.module.scss'
import {Box} from "./component/S4/Box/Box.jsx";
import {List} from "./component/S4/List/List.jsx";
import {HomePage} from "./component/S4/Page/HomePage/HomePage.jsx";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {AboutPage} from "./component/S4/Page/AboutPage/AboutPage.jsx";
import {ListPage} from "./component/S4/Page/ListPage/ListPage.jsx";
import {DetailPage} from "./component/S4/Page/DetailPage/DetailPage.jsx";

const arr = ["пункт 1", "пункт 2", "пункт 3"]
const goods = [
    {
        id: 1,
        title: "1",
        price: 20
    },
    {
        id: 2,
        title: "2",
        price: 20
    },
    {
        id: 3,
        title: "3",
        price: 20
    }
]

const App = () => {
    const renderItem = (item, i) => {
        const style = {borderBottom: `3px solid ${i % 2 ? "green" : "gray"}`};
        return <li key={i} style={style}>{item}</li>
    }
    const styleActiveLink = ({isActive}) => isActive ? `${s.link} ${s.active}` : s.link

    return (
        <BrowserRouter>
            <nav>
                <NavLink className={styleActiveLink} to="/">Главная</NavLink>
                <NavLink className={styleActiveLink} to="/about">О нас</NavLink>
                <NavLink className={styleActiveLink} to="/list">Лист</NavLink>
                <NavLink className={styleActiveLink} to="/arr">Пункты</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/list" element={<ListPage products={goods}/>}/>
                <Route path="/goods/:id" element={<DetailPage products={goods}/>}/>
                <Route
                    path="/arr"
                    element={
                        <Box className="test">
                            <List items={arr} renderItem={renderItem}/>
                        </Box>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}


export default App

// S3
/*import './App.module.scss'
import Greeting from "./component/S3/Greeteng/index.js";
import {
Counter
} from "./component/S3/Counter/Counter.jsx";
import {
MessagesList
} from "./component/S3/MessagesList/MessagesList.jsx";
import {
TextDisplayForm
} from "./component/S3/TextDisplayForm/TextDisplayForm.jsx";
import {
ThemeSwitcher
} from "./component/S3/ThemeSwitcher/ThemeSwitcher.jsx";

const msgList = [
{
id: 1, text
:
"Hello World!"
},
{
id: 2, text
:
"Hello World!"
},
{
id: 3, text
:
"Hello World!"
},
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


export default App*/


// S2
/*import './App.module.scss'
import {
Counter
} from "./component/S2/Counter/Counter.jsx";
import {
TextInput
} from "./component/S2/TextInput/TextInput.jsx";
import {
TodoList
} from "./component/S2/TodoList/TodoList.jsx";
import {
RealtimeClock
} from "./component/S2/RealtimeClock/RealtimeClock.jsx";
import {
Timer
} from "./component/S2/Timer/Timer.jsx";

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
import './App.module.scss'
import Greeting from "./component/S1/Greeteng";
import CurrentTime from "./component/S1/CurrentTime/CurrentTime";
import {
EventCard
} from "./component/S1/EventCard/EventCard.jsx"; //чтобы был красивый импорт добавили index js

function App() {
return <div>
    <Greeting/>
    <CurrentTime/>
    <EventCard name="Bright" date={new Date().toLocaleDateString()} location={'msk'}/>
</div>
}

export default App
*/