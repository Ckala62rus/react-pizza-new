import './scss/app.scss'
import Header from "./components/Header";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./components/Cart";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/filterSlice'

function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
      <div className="wrapper">
          <div>
              <div>
                  <button
                      aria-label="Increment value"
                      onClick={() => dispatch(increment({a: 1, b:2}))}
                  >
                      Increment
                  </button>
                  <span>{count}</span>
                  <button
                      aria-label="Decrement value"
                      onClick={() => dispatch(decrement())}
                  >
                      Decrement
                  </button>
              </div>
          </div>
        < Header />
        <div className="content">
          <div className="container">
              <Routes>
                  < Route path="/" element={< Home />} />
                  < Route path="/cart" element={< Cart />} />
                  < Route path="*" element={< NotFound />} />
              </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
