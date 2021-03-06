import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom';
import { backUrl } from '../config/config';


const PostImages = ({ images }) => {

    const [showImagesZoom, setShowImageZoom] = useState(false);

    const onZoom = useCallback(() => {
        setShowImageZoom(true);
    }, [])

    const onClose = useCallback(() => {
        setShowImageZoom(false);
    }, [])

    if (images.length === 1) {
        return (
            <>
                <img role="presentation" style={{ width: "100%" }} src={`${backUrl}/uploads/${images[0].src}`} alt={images[0].src} onClick={onZoom} />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    }
    if (images.length === 2) {
        return (
            <>
                <img role="presentation" style={{ width: "50%" }} src={`${backUrl}/uploads/${images[0].src}`} alt={images[0].src} onClick={onZoom} />
                <img role="presentation" style={{ width: "50%" }} src={`${backUrl}/uploads/${images[1].src}`} alt={images[1].src} onClick={onZoom} />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    };
    return (
        <div>
            <img role="presentation" style={{ width: "50%" }} src={`${backUrl}/uploads/${images[0].src}`} alt={images[0].src} onClick={onZoom} />
            <div
                role="presentation"
                style={{ display: 'inline-block', width: "50%", textAlign: "center", verticalAlign: 'middle' }}
                onClick={onZoom}>
                <PlusOutlined />
                <br />
                {images.length - 1}
                개의 사진 더보기
            </div>
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </div>
    )
}

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
}

export default PostImages;