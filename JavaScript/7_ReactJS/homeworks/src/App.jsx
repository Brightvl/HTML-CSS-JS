//hw4
import s from './App.module.scss'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {HomePage} from "./components/HW4/Page/HomePage/HomePage.jsx";
import {AboutPage} from "./components/HW4/Page/AboutPage/AboutPage.jsx";

const App = () => {
    const styleActiveLink = ({isActive}) => isActive ? `${s.link} ${s.active}` : s.link

    return (
        <BrowserRouter>
            <nav>
                <NavLink className={styleActiveLink} to="/">Главная страница</NavLink>
                <NavLink className={styleActiveLink} to="/about">О нас</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </BrowserRouter>
    )
};
export default App;

// hw3
/*import './App.module.scss'
import {TemperatureConverter} from "./components/HW3/TemperatureConverter/TemperatureConverter.jsx";
import {TodoList} from "./components/HW3/TodoList/TodoList.jsx";

const App = () => (
    <div>
        <TemperatureConverter/>
        <TodoList/>
    </div>
);
export default App;
*/
// hw2
/*import './App.module.scss'
import {Comments} from "./components/HW2/Comments/Comments.jsx";


function App() {
    return (
        <div className='container'>
            <Comments title='Комменатрии'/>
        </div>
    )
}

export default App*/


// hw1
/*import './App.module.scss'
import {Message} from "./components/HW1/Message/Message.jsx";
import {Banner} from "./components/HW1/Banner/Banner.jsx";

function App() {
    const text = `Hello`;
    const link = `https://images.unsplash.com/photo-1725914774525-0e81a46583b6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
    return (
    <div className='container'>
        <Banner link={link}>
            <Message text={text} />
        </Banner>

    </div>
  )
}

export default App*/
