import React from 'react';
import ResponsiveDrawer from '../drawer/ResponsiveDrawer';
import { task } from './Task';
import CardList from '../mainView/CardList';

export class MainView extends React.Component {

    constructor(props){
        super(props)
    }

    render() {

        return(
            <div className = "MainView">
                <ResponsiveDrawer></ResponsiveDrawer>
                <CardList task = {task}></CardList>
            </div>
        );

    }

}