import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                {/*<Route path="/profile" component={Profile}/>*/}
                {/*<Route path="/dialogs" component={Dialogs}/>*/}
                {/*<Route path="/news" component={News}/>*/}
                {/*<Route path="/music" component={Music}/>*/}
                {/*<Route path="/settings" component={Settings}/>*/}

                <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost}
                                                              updateNewPostText={props.updateNewPostText}/>}/>
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;