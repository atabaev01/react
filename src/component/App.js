import React from 'react';
import Header from './Header';
import Todo from './Todo';

const App = () => {
    return (
        <div className="container jumbotron">
            <div className='ml-auto mr-auto col-md-6 col-sm-8'>
                <Header/>
                <Todo/>
            </div>
        </div>
    );
};

export default App;