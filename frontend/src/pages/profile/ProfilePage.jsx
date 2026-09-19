import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import Posts from "../../components/common/Posts"
import ProfileHeaderSkeleton from '../../components/skeletons/ProfileHeaderSkeleton'
import EditProfileModal from './EditProfileModal'
import { POSTS } from "../../utils/db/dummy"
import { FaA, FaArrowLeft } from "react-icons/fa6"
import { IoCalendarOutline } from "react-icons/io5"
import { FaLink } from "react-icons/fa"
import { MdEdit } from "react-icons/md"
import { useQuery } from "@tanstack/react-query"
const ProfilePage = () => {
    //  const {data:authUser, error, isPending} useQuery({
    // : ['authUser']})
    const [coverImg, setCoverImg] = useState(null)
    const [profileImg, setProfileImg] = useState(null)
    const [feedType, setFeedType] = useState('posts')
    const coverImgRef = useRef(null)
    const profileImgRef = useRef(null)
    const isLoading = false
    const isMyProfile = true
    const user = {
        _id: '1',
        fullName: 'person',
        username: 'name',
        profileImg: '/avatars/boy2.png',
        coverImg: '/notebook.png',
        bio: 'lorem ipsum dolor sit amet consectetur',
        link: 'www.test.com',
        following: ['1', '2', '3'],
        followers:['1','2', '3']
    }
    const handleImgChange = (e, state) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                state === 'coverImg' && setCoverImg(reader.result)
                state==='profileImg' && setProfileImg(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }
    return (
        <>
                           <div className="avatar left-4 mt-40">
                        
                                <div className="w-32 h-32 rounded-full -mt-16 relative group/avatar">
                        <img src='/avatar-placeholder.png'></img>
                       
                        
                    </div>
      </div>


            <div className="flex-[4_4_0] border-r border-gray-700 min-h-screen">
                {isLoading && <ProfileHeaderSkeleton></ProfileHeaderSkeleton>}
                {!isLoading && !user && <p className="text-center text-lg mt-4">user not found</p>}
                
         <div className="flex flex-col">
                    {!isLoading && user && (
                        
                        <>
                            <div className="flex gap-10 px-4 py-2 items-center">
                                <Link to='/'>
                                    <FaArrowLeft className="w-4 h-4"></FaArrowLeft>
                                </Link>
                                <div className="flex flex-col">
                                    <p className="font-bold text-lg">{user?.fullName}</p>
                                    <span className="text-sm text-slate-500">{POSTS?.length} posts</span>
                                </div>
                            </div>
                    <div className="relative group/cover">
                    <div className="absolute top-2 right-2 rounded-full p-2 bg-opacity-75 cursor-pointer opacity-0 group-hover/cover:opacity-100 transition duration-200" onClick={() => coverImgRef.current.click()}>
                                    <MdEdit className="w-5 h-5 text-white"></MdEdit>
                    </div>
                    <input type="file" hidden ref={coverImgRef} accept="image/*" onChange={(e)=>handleImgChange(e, 'coverImg')}></input>
                    <input type="file" hidden ref={profileImgRef} accept="image/*" onChange={(e)=>handleImgChange(e, 'profileImg')}></input>
                                <img src={coverImg || user?.coverImg || '/cover.png'} className="h-52 w-full object-cover"></img>
                            </div>
                     <div className="avatar left-4">
                        {/* <img src={coverImg}></img> */}
                                <div className="w-32 rounded-full -mt-16 relative group/avatar">
                        <img src={profileImg || user?.profileImg || '/avatars'}></img>
                       
                        <div className="absolute top-5 right-3 bg-pink-50"  >
                            {isMyProfile && (
                          <>
                                    
                                <MdEdit className="w-4 h-4 text-gray-800" onClick={() => profileImgRef.current.click()}></MdEdit>
                          </>
                            )}
                        </div>
                    </div>
        </div>
                        </>



                    )}
                </div>

                {isMyProfile && (
                    <>

                    {/* <div className="absolute top-2 right-2 rounded-full p-2" onClick={() => coverImgRef.current.click()}>
                        <MdEdit className="w-5 h-5 text-white"></MdEdit>
                        </div> */}
                    </>
                )}
                <input type='file' hidden ref={profileImgRef} onChange={(e)=>handleImgChange(e, 'profileImg')}></input>
                {/* <div className="avatar absolute -bottom-16 left-4">
                    <div className="w-32 rounded-full relative group/avatar">
                        <img src={profileImg || user?.profileImg || '/avatars'}></img>
                        <div className="absolute top-5 right-3 bg-pink-50">
                            {isMyProfile && (
                          <>
                                    
                                <MdEdit className="w-4 h-4 text-gray-800" onClick={() => profileImg}></MdEdit>
                          </>
                            )}
                        </div>
                    </div>
                </div> */}
                <div className="flex justify-end px-4 mt-5">
                    {isMyProfile && <EditProfileModal></EditProfileModal>}
                    {!isMyProfile && (
                        <button className="btn btn-outline rounded-full btn-sm" onClick={()=>alert('followed successfully')}>follow</button>
                    )}
                    {(coverImg || profileImg) && (
                        <button className="btn btn-primary rounded-full btn-sm" onClick={()=>alert('profile updated successfully')}>update</button>
                    )}
                </div>
                
                <div className="flex flex-col gap-4 mt-14 px-4">
                     {/* <div className="avatar absolute -bottom-16 left-4"> */}
       
                    
                
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">{user?.fullName}</span>
                        <span className="text-sm text-slate-500">@{user?.username}</span>
                        <span className="text-sm my-1">{user?.bio}</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {user?.link && (
                            <div className="flex gap-1 items-center">
                                <>
                                    <FaLink className="w-3 h-3 text-slate-700"></FaLink>
                                    <a
                                        // href='/www.test.com'
                                        // target="_blank"
                                        // ref='noreferrer'
                                        className="text-sm text-gray-800">test.com/@username</a>
                                </>
                            </div>
                        )}
                        <div className="flex gap-2 items-center">
                            <IoCalendarOutline className="w-4 h-4 text-slate-900"></IoCalendarOutline>
                            <span className="text-sm text-slate-500">joined</span>

                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex gap-1 items-center">
                            <span className="font-bold text-xs">{user?.followers}</span>
                            <span className="text-slate-500 text-xs">followers</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex gap-1 items-center">
                            <span className="font-bold text-xs">{user?.following}</span>
                            <span className="text-slate-500 text-xs">following</span>
                        </div>
                    </div>
                </div>
                <div className="flex w-full border-b border-gray-700 mt-4">
        <div className="flex justify-center flex-1 p-3 text-slate-500 hover:bg-secondary transition duration-300 relative cursor-pointer"
            onClick={() => setFeedType('posts')}>
            posts {feedType === 'posts' && (
                <div className="absolute bottom-o w-10 h-1 rounded-full bg-primary"></div>
            )}
        </div>
        <div className="flex justify-center flex-1 p-3 text-slate-500 hover:bg-secondary transition duration-300 relative cursor-pointer"
            onClick={() => setFeedType('likes')}>
            likes {feedType === 'likes' && (
                <div className="absolute bottom-o w-10 h-1 rounded-full bg-primary"></div>
            )}
        </div>
                </div>
            <Posts></Posts>
            </div>
            </>
    )
}
export default ProfilePage