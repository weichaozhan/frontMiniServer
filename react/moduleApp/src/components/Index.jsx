import React, {lazy} from 'react'
import { withRouter, Link, Route, Switch } from "react-router-dom";

import suspenseComponent from '../tools/suspenseComponent';

// import Test from './Test.jsx';
// import CT from './CT.jsx';
// import NoMatch from './NoMatch.jsx';

class MainIndex extends React.Component {
  constructor() {
		super()
		
    this.state = {
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <span>MainIndex</span>
				<ul>
					<li>
						<Link to={`${this.props.match.url}/test`}>Test</Link>
					</li>
					<li>
						<Link to={`${this.props.match.url}/ct`}>CT</Link>
					</li>
				</ul>
				<Switch>
					<Route path={`${this.props.match.path}/`} exact component={suspenseComponent(lazy(() => import('./Test.jsx')))} />
					<Route path={`${this.props.match.path}/test`} exact component={suspenseComponent(lazy(() => import('./Test.jsx')))} />
					<Route path={`${this.props.match.path}/ct`} exact component={suspenseComponent(lazy(() => import('./CT.jsx')))} />
					<Route component={suspenseComponent(lazy(() => import('./NoMatch.jsx')))} />
					{/* <Route path={`${this.props.match.path}/`} exact component={Test} />
					<Route path={`${this.props.match.path}/test`} exact component={Test} />
					<Route path={`${this.props.match.path}/ct`} exact component={CT} />
					<Route component={NoMatch} /> */}
				</Switch>
      </div>
    )
  }
}

export default withRouter(MainIndex)