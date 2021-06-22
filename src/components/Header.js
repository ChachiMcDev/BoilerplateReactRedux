import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut } ) => (
    <header className="header">
        <div className="content-container">
        <div className="header__content">
        
        <NavLink className="header__title"
            exact to="/dashboard" 
            activeClassName="is-active"
            activeStyle={{
                color: "green"
            }}
        >
            <h1>Boilerplate React</h1>
        </NavLink>

        <NavLink className="header__title"
            exact to="/create" 
            activeClassName="is-active"
            activeStyle={{
                color: "green"
            }}
        >
            Create Expense
        </NavLink>

        <NavLink className="header__title"
            exact to="/help" 
            activeClassName="is-active"
            activeStyle={{
                color: "red"
            }}
            >
            Need Help?
        </NavLink>
        <button className="button button--link" onClick={startLogOut}>Logout</button>

        </div>


        </div>


    </header>
)


//export const Header = ({ startLogout }) => (
//    <header className="header">
//      <div className="content-container">
//        <div className="header__content">
//          <Link className="header__title" to="/dashboard">
//            <h1>Expensify</h1>
//          </Link>
//          <button className="button button--link" onClick={startLogout}>Logout</button>
//        </div>
//      </div>
//    </header>
//  );
//
const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);