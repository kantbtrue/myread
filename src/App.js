import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Category from './components/Category';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Header from './modules/Header';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component {
    state = {
        isLoading: true,
        data: [],
        error: null,
    };

    componentDidMount () {
        BooksAPI.getAll().then(
            result => {
                this.setState({
                    isLoading: false,
                    data: result
                })
            }, 
            error => {
                this.setState({
                    isLoading: false,
                    error
                });
            }
        );
    }


    render () {
        const { isLoading, data, error } = this.state;
        if (error) {
            return <div className="error">Error: {error.message}</div>;
        } else if (isLoading) {
            return <div className="loading">Loading...</div>;
        } else {
            return (
                <Router>
                <div className="wrapper">
                    <Header title="My Read" />
                    <main className="main">
                        <Switch> 
                            <Route exact path="/search" component={Search} />
                            <Route exact path="/">
                                <Link to="/search" className="add-new">+</Link>
                                <Category booksData={data.filter(book => book.shelf === "currentlyReading") } shelfTitle="Currently Reading" />
                                <Category booksData={data.filter(book => book.shelf === "wantToRead")}  shelfTitle="Want to Read" />         
                                <Category booksData={data.filter(book => book.shelf === "read")} shelfTitle="Read" />
                            </Route>
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                </div>
                </Router>
            );
        }
    };
}

export default App;
