import { Button, Input, Form } from 'antd';
import { useCallback, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useinput from '../hooks/useinput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
    marginTop: 10px;
`;

const LoginForm = () => {
    const { logInLoading, loginError } = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const [email, onChangeEmail] = useinput('');
    const [password, onChangePassword] = useinput('');

    const FormWrapper = styled(Form)`
    padding: 10px;
    `;

    useEffect(()=>{
        if(loginError){
            alert(loginError);
        }
    },[loginError]);

    const onSubmitForm = useCallback(() => {
        dispatch(loginRequestAction({email, password}));
    },[email, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor = " user-email "> 이메일 </label>
                <br />
                <Input name="user-email" type="email" value={email} onChange = {onChangeEmail} required />
            </div>
            <div>
                <label htmlFor = " user-id "> 비밀번호 </label>
                <br />
                <Input name="user-password" value={password} onChange = {onChangePassword} required />
            </div>
            <ButtonWrapper>
                <Button type='primary' htmlType="submit" loading = {logInLoading}>로그인</Button>
                <Link href = "/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    )
}


export default LoginForm;