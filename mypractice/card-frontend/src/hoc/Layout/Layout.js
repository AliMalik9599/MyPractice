import React, {Component} from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Login from "../../containers/Login/Login";
import Animation from "../../containers/Login/Animation"
import CourseWrapper from "../../containers/CourseWrapper/CourseWrapper";
import Selection from "../../containers/Selection/Selection";


const viewEnum = {
    ANIMATION: 0,
    LOGIN: 1,
    COURSE: 2,
    SELECTION: 3
}

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: viewEnum.ANIMATION,
            token: ''
        }
    }

    changeLayoutState = (token) => {
        console.log("changeLayoutState")
        console.log(token)
        this.setState({token: token})
        console.log("Set token: " + this.state.token)
        this.setState({view: viewEnum.COURSE})
    }

    stopAnimation = () => {
        this.setState({view: viewEnum.LOGIN});
    }


    render () {

        let view = null;
        switch (this.state.view) {
            case viewEnum.ANIMATION:
                view = <Animation stopAnimation={this.stopAnimation.bind(this)}/>
                break;
            case viewEnum.LOGIN:
                view = <Login formClick={this.changeLayoutState.bind(this)}/>
                break;
            case viewEnum.COURSE:
                view = <CourseWrapper token={this.state.token}/>
                break;
        }
        return (
            <div>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {view}
                </main>
            </div>
        );
    }
}

export default Layout;