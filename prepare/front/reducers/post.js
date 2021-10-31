import produce from 'immer';


export const initalState = {
    mainPosts: [],
    imagePaths: [],
    hasMorePosts: true,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError:null,
    addPostLoading: false,
    addPostDone: false,
    addPostError:null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError:null,
    removePostLoading: false,
    removePostDone: false,
    removePostError:null,
    likePostLoading: false,
    likePostDone: false,
    likePostError:null,
    unlikePostLoading: false,
    unlikePostDone: false,
    unlikePostError:null,
    uploadImagesLoading: false,
    uploadImagesDone: false,
    uploadImagesError:null,
    retweetLoading: false,
    retweetDone: false,
    retweetError:null,
}


export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
})
export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
})



const reducer = (state = initalState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case UPLOAD_IMAGES_REQUEST:
                    draft.uploadImagesLoading = true;
                    draft.uploadImagesDone = false;
                    draft.uploadImagesError = null;
                break;
            case UPLOAD_IMAGES_SUCCESS: {
                    draft.imagePaths = action.data;
                    draft.uploadImagesDone = true;
                    draft.uploadImagesLoading = false;
                break;}
            case UPLOAD_IMAGES_FAILURE:
                    draft.uploadImagesError = action.error;
                    draft.uploadImagesLoading = false;
                break;
            case REMOVE_IMAGE :
                    draft.imagePaths = draft.imagePaths.filter(( v, i )=> i !== action.data);
                break;
            case LIKE_POST_REQUEST:
                    draft.likePostLoading = true;
                    draft.likePostDone = false;
                    draft.likePostError = null;
                break;
            case LIKE_POST_SUCCESS: {
                    const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                    post.Likers.push({ id: action.data.UserId });
                    draft.likePostDone = true;
                    draft.likePostLoading = false;
                break;}
            case LIKE_POST_FAILURE:
                    draft.likePostError = action.error;
                    draft.likePostLoading = false;
                break;
            case UNLIKE_POST_REQUEST:
                    draft.unlikePostLoading = true;
                    draft.unlikePostDone = false;
                    draft.unlikePostError = null;
                break;
            case UNLIKE_POST_SUCCESS: {
                    const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                    post.Likers = post.Likers.filter((v) => v.id !== action.data.PostId);
                    draft.unlikePostDone = true;
                    draft.unlikePostLoading = false;
                break; }
            case UNLIKE_POST_FAILURE:
                    draft.unlikePostError = action.error;
                    draft.unlikePostLoading = false;
                break;
            case LOAD_POSTS_REQUEST:
                    draft.loadPostsLoading = true;
                    draft.loadPostsDone = false;
                    draft.loadPostsError = null;
                    break;
            case LOAD_POSTS_SUCCESS:
                    draft.mainPosts = draft.mainPosts.concat(action.data);
                    draft.loadPostsDone = true;
                    draft.loadPostsLoading = false;
                    draft.hasMorePosts = action.data.length === 10;
                break;
            case LOAD_POSTS_FAILURE:
                    draft.loadPostsError = action.error;
                    draft.loadPostsLoading = false;
                break;
            case ADD_POST_REQUEST:
                    draft.addPostLoading = true;
                    draft.addPostDone = false;
                    draft.addPostError = null;
                    break;
            case ADD_POST_SUCCESS:
                    draft.mainPosts.unshift(action.data);
                    draft.imagePaths = [];
                    draft.addPostDone = true;
                    draft.addPostLoading = false;
                break;
            case ADD_POST_FAILURE:
                    draft.addPostError = action.error;
                    draft.addPostLoading = true;
                break;
            case REMOVE_POST_REQUEST:
                    draft.removePostLoading = true;
                    draft.removePostDone=false;
                    draft.removePostError=null;
                break;
            case REMOVE_POST_SUCCESS:
                    draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.postId);
                    draft.removePostDone = true;
                    draft.removePostLoading = false;
                break;
            case REMOVE_POST_FAILURE:
                    draft.removePostError = action.error;
                    draft.removePostLoading = false;
                break;
            case RETWEET_REQUEST:
                    draft.retweetLoading = true;
                    draft.retweetDone = false;
                    draft.retweetError = null;
                break;
            case RETWEET_SUCCESS:
                    draft.mainPosts.unshift(action.data);
                    draft.retweetDone = true;
                    draft.retweetLoading = false;
                break;
            case RETWEET_FAILURE:
                    draft.retweetError = action.error;
                    draft.retweetLoading = true;
                break;
            case ADD_COMMENT_REQUEST:
                    draft.addCommentLoading = true;
                    draft.addCommentDone = false;
                    draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS:{
                const post = draft.mainPosts.find((v)=> v.id === action.postId);
                post.Comments.unshift(action.data.content);
                draft.addCommentDone = true;
                draft.addCommentLoading = false;
                break;
                // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
                // const post = state.mainPosts[postIndex];
                // post.Comments= [dummyComment(action.data.content), ...post.Comments];
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = post;
                // return{
                //     ...state,
                //     mainPosts,
                //     addCommentDone: true,
                //     addCommentLoading:false,
                // };
            }
            case ADD_COMMENT_FAILURE:
                    draft.addCommentError = action.error;
                    draft.addCommentLoading = false;
                break;
            default:
                break;
        }
    });

    
};

export default reducer;