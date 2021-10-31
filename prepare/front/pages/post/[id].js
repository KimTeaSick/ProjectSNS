import { useRouter } from "next/router"

const Post = () => {
    const router = useRouter();
    const{ id } = router.query;
};

export default Post;