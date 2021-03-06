import { Button, Form, Input } from "antd";
import React, { useCallback, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../../back/models/image";
import { backUrl } from "../config/config";
import useinput from "../hooks/useinput";
import { addPost, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE, ADD_POST_REQUEST } from "../reducers/post";

const PostForm = () => {
    const dispatch = useDispatch();
    const { imagePaths, addPostDone } = useSelector((state) => state.post);
    const [text, onChangeText, setText] = useinput('');

    useEffect(() => {
        if(addPostDone){
            setText('');
        }
    }, [addPostDone])

    const onSubmit = useCallback(()=> {
        if(!text || !text.trim()){
            return alert('게시글을 작성하세요')
        }
        const formdata = new FormData();
        imagePaths.forEach((p) => {
            formdata.append('image', p);
        });
        formdata.append('content', text);
        return dispatch({
            type: ADD_POST_REQUEST,
            data: formdata,
        })
    }, [text, imagePaths]);
    
    const imageInput = useRef();
    const onClickImageUpload = useCallback(()=>{
        imageInput.current.click();
    },[imageInput.current]);

    const onChangeImages = useCallback((e)=>{
        console.log('images', e.target.files);
        const imageFormData = new FormData();
        [].forEach.call(e.target.files,(f)=>{
            imageFormData.append('image', f);
        });
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        })
    });
    const onRemoveImage = useCallback((index)=>()=>{
        dispatch({
            type: REMOVE_IMAGE,
            dara: index,
        });
    });

    return(
        <Form style={{ margin: '10px 0 20px'}} encType="multipart/form-data" onFinish = {onSubmit}>
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?" />
            <div>
                <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: ' right' }} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {imagePaths.map((v, i) => (
                    <div key={v} style={{ display: 'inline-block'}}>
                        <img src={`${backUrl}/uploads/${v}`} style={{ width : '200px' }} alt={v}/>
                        <div>
                            <Button onClick={onRemoveImage(i)}>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
};

export default PostForm;