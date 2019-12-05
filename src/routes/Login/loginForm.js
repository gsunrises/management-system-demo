import React, { Component } from 'react';

import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';

import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        // To disabled submit button at the beginning.
        // this.props.form.validateFields();


        notification.open({
            message: <div className="noticeTab"><p>初始账号：gsunrises</p><p>初始密码：gsunrises</p></div>,
            duration: 0,
            className: 'login-notification'
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        console.log(this.props);
        return (
            <div className={this.props.className}>
                <h3 className='title'>管理员登录</h3>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />,
                        )}

                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />,
                        )}
                    </Form.Item>

                    <p className="login-btn">
                        <input type="button" value="登录" className="loginBtn" />
                        <input type="button" value="去注册" onClick={this.register} className="registerBtn" />
                    </p>
                </Form>
            </div>
        );
    }

    register = () => {
        this.props.changeForm('register')
        setTimeout(() => this.props.form.resetFields(), 500)
    }
}




// export default LoginForm;
export default Form.create()(LoginForm);