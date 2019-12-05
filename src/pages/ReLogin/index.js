import React from 'react';

import { Route, Redirect } from 'react-router-dom';

// 1. 先检验是否登录，如果未登录，则执行第2不  （未做）

// 2. 重定向 到 登录界面
// class ReLogin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return (  );
//     }
// }

const isLogin = true

const ReLogin = ({ component: Component, ...rest }) => (

    <Route
        {...rest}
        render={(props) => (
            !isLogin   // 做校验是否登录
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
        )}
    />
)

export default ReLogin;