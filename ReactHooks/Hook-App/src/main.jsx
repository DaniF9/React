import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { CounterApp } from './01-useState/CounterApp'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'
import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp'
import {MainApp} from './09-useContex/MainApp';
//import { HooksApp } from './HooksApp'
//import { CounterWithCustomHok } from './01-useState/CounterWithCustomHok'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <StrictMode> */}
      < MainApp/>
    {/* </StrictMode> */}
  </BrowserRouter>
)