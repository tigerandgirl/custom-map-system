import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { HashRouter as Router, Route, Switch, Redirect, hashHistory } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';

import Nav from '../components/nav';
import Menu from '../components/menu';
import Home from '../pages/Home';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import ErrorPage from '../pages/ErrorPage';
import CommentPage from '../pages/CommentPage';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    // transform: `scale(${styles.scale})`,
    transform: `translate3d(${styles.offset}px,0,0)`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  atEnter: {
    opacity: 0,
    // scale: 1.2,
    offset: -400
  },
  atLeave: {
    opacity: bounce(0),
    // scale: bounce(0.8),
    offset: bounce(-400),
  },
  atActive: {
    opacity: bounce(1),
    offset: bounce(0),
  },
};

export default class extends Component {

    componentDidMount(){
        //去除首页loading
        let rootDom=document.documentElement; //html标签
        rootDom.className='loaded';
        setTimeout(()=>{
            rootDom.className='loaded end';
        },600);
    }

	render() {
        return (
            <Router forceRefresh={!('pushState' in window.history)}>
                {/* <div> */}
                    {/* <Nav /> */}
                    <Menu>
                        {/*<AnimatedSwitch atEnter={{ opacity: 0,offset: -40 }} atLeave={{ opacity: 0,offset: -40 }} atActive={{ opacity: 1,offset: 0 }} mapStyles={(styles) => ({opacity:styles.opacity,transform: `translate3d(0,${styles.offset}px,0)`})} className="switch-wrapper">*/}
                        <AnimatedSwitch atEnter={bounceTransition.atEnter} atLeave={bounceTransition.atLeave} atActive={bounceTransition.atActive} mapStyles={mapStyles} className="route-wrapper">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/page1" component={Page1} />   
                            {/* <Route exact path="/page2/:aaaa/:bbbb" component={Page2} /> */}
                            <Route exact path="/page2" component={Page2} />
                            <Route exact path="/comment" component={CommentPage} />
                            <Redirect from="/zzz" to="/" push/>
                            <Redirect from="/index.html" to="/" push/>
                            <Route component={ErrorPage} />
                        </AnimatedSwitch>
                    </Menu>
                {/* </div>                 */}
            </Router>
        );
    }
};

            {/*<Router history={hashHistory}>*/}