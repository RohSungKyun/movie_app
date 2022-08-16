import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
// v6 react-router0dom (https://reactrouter.com/docs/en/v6/getting-started/overview)
// Sitch => Routes, component => element로 바뀜 (https://velog.io/@kcdoggo/Switch-is-not-exported-from-react-router-dom-%EC%97%90%EB%9F%AC)링크

function App() {
  return <Router>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Detail />} />
    </Routes>
  </Router>;
}

export default App;
