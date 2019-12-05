import React, { Component } from 'react';

import RegisterForm from './registerForm';
import LoginForm from './loginForm';
import './index.css';
// const styleWrap = {
//     loginBgImg: {
//         position: 'fixed',
//         top: '0',
//         left: '0',
//         width: '100vw',
//         height: '100vh',
//         backgroundImage: 'url(https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/bg1.jpg?raw=true)',
//         backgroundSize: '100% 100%',
//         transition: 'all .5s'
//     }
// }
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: "login"
        }
    }

    changeForm(form) {
        this.setState({
            showForm: form,
            loading : true
        })
    }

    render() {
        const { showForm } = this.state
        return (
            <div className="login-page">
                <div className="loginWrap">
                    {/* <div className="loginBgImg" style={styleWrap.loginBgImg}></div> */}
                    <LoginForm
                        className={showForm === 'login' ? 'box showForm' : 'box hideForm'}
                        changeForm = {this.changeForm.bind(this)}
                    />
                    <RegisterForm
                        className={showForm === 'register' ? 'box showForm' : 'box hideForm'}
                        changeForm = {this.changeForm.bind(this)}
                    />
                </div>
            </div>
        );
    }

}

export default Login;