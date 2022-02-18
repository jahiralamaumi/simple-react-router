import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Posts from "./components/Posts/Posts";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>

                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/friends">
                        <Friends></Friends>
                    </Route>
                    <Route path="/friend/:fid">
                        <FriendDetail></FriendDetail>
                    </Route>
                    <Route path='/posts'>
                        <Posts></Posts>
                    </Route>
                    <Route path = '/post/:postId'>
                        <PostDetail></PostDetail>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
