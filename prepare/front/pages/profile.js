import React, { useEffect, useState, useCallback } from 'react';
import AppLayout from '../componets/AppLayout';
import NicknameEditForm from "../componets/NicknameEditForm";
import FollowList from "../componets/FollowerList";
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from '../reducers/user';
import axios from 'axios';
import useSWR from 'swr';


const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);

const Profile = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const [followersLimit, setFollowersLimit] = useState(3)
    const [followingsLimit, setFollowingsLimit] = useState(3)
    const { data: followersData, error: followerError } = useSWR(`http://localhost:3065/user/followers?limit=${followersLimit}`, fetcher);
    const { data: followingsData, error: followingError } = useSWR(`http://localhost:3065/user/followings?limit=${followingsLimit}`, fetcher);
    

    useEffect(() => {
        if (!(me && me.id)) {
            Router.push('/');
        }
    }, [me && me.id]);

    const loadMoreFollowings = useCallback(()=>{
        setFollowingsLimit((prev) => prev + 3);
    },[])
    const loadMoreFollowers = useCallback(()=>{
        setFollowersLimit((prev) => prev + 3);
    },[])

    if (!me) {
        return null;
    }
    if (followerError || followingError) {
        console.error(followingError || followerError)
        return <div>팔로잉/ 팔로워 로딩 중 에러가 발생했습니다.</div>
    }
    return (
        <>
            <Head>
                <title>Node Bird | 내 프로필</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingsData} onClickMore={loadMoreFollowings} loading={!followingsData && !followingError } />
                <FollowList header="팔로워 목록" data={followersData} onClickMore={loadMoreFollowers} loading={!followersData && !followerError}/>
            </AppLayout>
        </>
    )
}

export default Profile;