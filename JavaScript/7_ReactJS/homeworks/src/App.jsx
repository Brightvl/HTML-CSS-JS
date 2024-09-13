// hw2
import './App.css'
import {Comments} from "./components/HW2/Comments/Comments.jsx";


function App() {
    return (
        <div className='container'>
            <Comments title='Комменатрии'/>
        </div>
    )
}

export default App


// hw1
/*import './App.css'
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
