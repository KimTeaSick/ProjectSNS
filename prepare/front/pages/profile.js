import React, { useEffect } from 'react';
import AppLayout from '../componets/AppLayout';
import NicknameEditForm from "../componets/NicknameEditForm";
import FollowList from "../componets/FollowerList";
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import  Router  from 'next/router';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST} from '../reducers/user'

const Profile = ()=> {
    const dispatch = useDispatch();
    const { me } = useSelector((state)=> state.user);

    useEffect(()=>{
        dispatch({
            type:LOAD_FOLLOWERS_REQUEST,
        });
        dispatch({
            type:LOAD_FOLLOWINGS_REQUEST,
        });
    },[])

    useEffect(()=>{
        if(!(me && me.id)) {
            Router.push('/');
        }
    },[me && me.id]);
    if(!me){
        return null;
    }

    return(
        <>
            <Head>
                <title>Node Bird | 내 프로필</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={me.Followings} />
                <FollowList header="팔로워 목록" data={me.Follwers}  />
            </AppLayout>
        </>
    )
}

export default Profile;