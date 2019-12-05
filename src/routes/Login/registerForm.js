import React, { Component } from 'react';

import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        console.log(this.props);
        return (
            <div className={this.props.className}>
                <h3 className='title'>用户注册</h3>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username-register', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />,
                        )}

                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password-register', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('repassword-register', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="确认密码"
                            />,

                        )}
                        <p className="login-btn">
                            <input type="button" value="注册" className="loginBtn" />
                            <input type="button" value="去登录" onClick={this.register} className="registerBtn" />
                        </p>
                    </Form.Item>
                </Form>
            </div>
        );
    }

    register = (type) => {
        this.props.changeForm('login')
    }
}

export default Form.create()(RegisterForm);