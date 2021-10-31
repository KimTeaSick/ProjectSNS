import { Avatar, Button, Card, Popover, List, Comment } from "antd";
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import PostImages from "./PostImages";
import { useCallback, useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import PostCardContent from "./postCardContent";
import { REMOVE_POST_REQUEST,LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST } from "../reducers/post";
import FollowButton from "./FollowButton";

const PostCard = ({post}) => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id);
    const { removePostLoading, retweetError } = useSelector((state) => state.post);
    
 

    const onLike = useCallback(() =>{
        if(!id){
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
        type: LIKE_POST_REQUEST,
        data: post.id,
        })
    },[]);

    const onUnLike = useCallback(() =>{
        if(!id){
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
        type: UNLIKE_POST_REQUEST,
        data: post.id,
        })
    },[]);

    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const onToggleComment = useCallback(() =>{
        setCommentFormOpened((prev) => !prev);
    },[]);
    const onRemovePost = useCallback(()=>{
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
      });
    }, []);

    const liked = post.Likers.find((v)=> v.id === id);
    const onRetweet = useCallback(()=>{
        if(!id){
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: RETWEET_REQUEST,
        })
    },[]);
    return(
        <div style={{ marginBottom: 20}}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retwwet" onClick={onRetweet} />,
                    liked
                    ?<HeartTwoTone  twoToneColor="#eb2f96" key="heart" onClick={onUnLike} />
                    :<HeartOutlined key="heart" onClick={onLike} />,
                    <MessageOutlined key="comment" onClick = {onToggleComment} />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id ?
                            (
                            <>
                            <Button>수정</Button>
                            <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                            </>
                            ) : <Button>신고</Button> }
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
                title = {post.RetweetId ? `${post.USer.nickname}님이 재게시 하였습니다.` : null }
                extra = {id && <FollowButton post = {post} />}
            >
                {post.RetweetId && post.Retweet
                ? (<Card
                    cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
                >
                    <Card.Meta
                    avatar={<Avatar>{post.Retweet.User.nickname[0]}</Avatar>}
                    title={post.Retweet.User.nickname}
                    description={<PostCardContent postData={post.Retweet.content}/>}
                    />
                </Card>)
                : (
                    <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content}/>}
                    />
                )}

            </Card>
            {commentFormOpened && (
                <div>
                    <CommentForm post = {post} />
                    <List 
                        header = {`${post.Comments.length}개의 댓글`}
                        itemLayout = "horizontal"
                        dataSource = {post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        id:PropTypes.number,
        User:PropTypes.object, 
        content: PropTypes.string,
        createAt: PropTypes.string,
        Commemnts : PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
        Liker: PropTypes.arrayOf(PropTypes.object),
        RetweetId: PropTypes.number,
        Retweet: PropTypes.objectOf(PropTypes.any), 
    }).isRequired,
}

export default PostCard;