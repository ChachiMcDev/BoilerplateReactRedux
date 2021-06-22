//Hihger Order Component (HOC) - A component(HOC) that renders another component (regular component)
//reuse code
//render hijacking
//prop manipulation
//abstract state


import React from 'react';
import ReactDOM from 'react-dom';



const Info = (props)=> (
    <div>
        <h1>Info</h1>
        <p>YOU ARE THE ADMIN: {props.info}</p>
       
    </div>
)

const MoreInfo = (props)=> (
    <div>
        <h1>MORE</h1>
        <p>cmonson get to admin level: {props.moreinfo}</p>
       
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    //this is the HOC
    return (props) => (
        <div>
            <p>This is private info.  Please don't share yo!</p>
            <WrappedComponent {...props}/>
        </div>
    )
}


const requireAuthentication = (WrappedComponent, WrappedComponentA) => {

    return (props) => (
        <div>
            {props.isAdmin ? (<WrappedComponent {...props} />) : (<WrappedComponentA {...props} />)} 
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info, MoreInfo);




ReactDOM.render(<AuthInfo isAdmin={false} moreinfo="holy crap there is mroe"/>, document.getElementById('app'))
