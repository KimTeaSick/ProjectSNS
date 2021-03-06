import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import { Children, useCallback, useState } from 'react';
import UserProfile from '../componets/UserProfile';
import SignIn from '../componets/LoginForm';
import LoginForm from '../componets/LoginForm';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import useInput from '../hooks/useinput';
import  Router  from 'next/router';

const Global = createGlobalStyle`
 .ant-row{
     margin-right: 0 !important;
     margin-left: 0 !important;
 }
 .ant-col:first-child {
     padding-left: 0 !important;
 }
 .ant-col:last-child{
     padding-right: 0 !important;
 }
`;

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;


// xs : mobile sm : tablet md: mini desktop lg, xl : big display

const AppLayout = ({ children })=>{
    const [searchInput, onChangeSearchInput] = useInput('');
    
    const { me } = useSelector((state) => state.user);

    const onSearch = useCallback(()=>{
        Router.push(`/hashtag/${searchInput}`);
    },[searchInput])

    return(
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>2017133051</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput 
                    enterButton
                    value={searchInput}
                    onChange={onChangeSearchInput}
                    onSearch={onSearch}
                    />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            
            <Row gutter={8}>
                <Col xs={24} md={ 6} >
               {
                   me ? <UserProfile /> : <LoginForm   />
               }
                </Col>
                <Col xs={24} md={12} >
                    {children}
                </Col>
                <Col xs={24} md={ 6} >
                    <a href="https://www.naver.com" target="_blank" rel="noreferrer nopener">Made by JoSef</a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.PropTypes = {
    children : PropTypes.node.isRequired,
}


export default AppLayout;