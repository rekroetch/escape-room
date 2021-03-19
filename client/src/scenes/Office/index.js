import React from 'react';
// import styled from 'styled-components';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';


// import { Button } from 'react-bootstrap';

// function Office () {
//     return (
//         <div>
//             <h1>Office</h1>
//             <p>This is where the game starts. Users will see the background of an office with a desk, painting, and bookshelf in the room.  Each can be clicked on and will render the associated component, changing the scene to the new component.</p>
//             <h1>Items</h1>
//             <ul>
//                 <li><Button component={ Link } to="/about" variant="contained" color="primary">
//                     About Page</Button>
                    
//                 </li>
//             </ul>
//         </div>

//     )
// }


// // export default Office
// const Button = styled.button`
//     background-color: blue;
// `
// function clickMe () {
//     alert ('You clicked me');
// }
export default function Office () {
    return (
        <div>
            <h1>Items</h1>
            <ul>
                <li>
                    <Route render={({ history}) => (
                    <Link onClick={() => { history.push('/bookshelf') }}>
                        Bookshelf
                    </Link>
                            )} />
                </li>
                <li>
                <Route render={({ history}) => (
                    <Link onClick={() => { history.push('/painting') }}>
                        Painting
                    </Link>
                            )} />
                </li>
                <li>
                <Route render={({ history}) => (
                    <Link onClick={() => { history.push('/desk') }}>
                        Desk
                    </Link>
                            )} />
                </li>
            </ul>
        </div>
        
    )
}

