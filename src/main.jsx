import ReactDOM from 'react-dom/client'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import { MainApp } from './08-useContext/MainApp'
// import { HooksApp } from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CustomCounterHookApp } from './01-useState/CustomCounterHookApp.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-example-hooks/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
import { TodoApp } from './07-useReducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    // <BrowserRouter>
    //     <MainApp />
    // </BrowserRouter>
    <TodoApp />
)
