import Post from './Post'
import PostSkeleton from '../skeletons/PostSkeleton'
import { POSTS } from '../../utils/db/dummy'
const Posts = () => {
  const isLoading=false
    return (
        <>
            {isLoading && (
                <div className='flex flex-col justify-center'>
                    <PostSkeleton></PostSkeleton>
                    <PostSkeleton></PostSkeleton>
                    <PostSkeleton></PostSkeleton>
                </div>
            )}
            {!isLoading && POSTS?.length === 0 && <p className='text-center my-4'>no posts in this tab switch</p>}
            {!isLoading && POSTS && (
                <div>{POSTS.map((post) => (
                    <Post key={post._id} post={post}></Post>
                ))}</div>
            )}
</>   
  )
}

export default Posts