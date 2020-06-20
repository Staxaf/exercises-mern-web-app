import React from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Navbar from "./components/Navbar.component";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <div className="container">
                <Route path="/" exact render={() => <ExercisesList /> } />
                <Route path="/edit/:id" component={withRouter(EditExercise)} />
                <Route path="/create" render={() => <CreateExercise /> } />
                <Route path="/user" render={() => <CreateUser /> } />
            </div>
        </BrowserRouter>
    );
}

export default App;
