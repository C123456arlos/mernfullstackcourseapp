import { Link } from 'react-router-dom'
import { useState } from 'react'
import XSvg from '../../../components/svgs/X'
import { MdOutlineMail } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { MdPassword } from 'react-icons/md'
import { MdDriveFileRenameOutline } from 'react-icons/md'
const SignUpPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        fullName: '',
        password:''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const isError = false
    return (
        <div className='max-w-screen-xl mx-auto flex h-screen px-10'>
            <div className='flex-1 hidden lg:flex items-center justify-center'>
                <XSvg className='lg:w-2/3 fill-white'></XSvg>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center'>
                <form className='lg:w-2/3 mx-auto md:mx-20 flex gap-4 flex-col' onSubmit={handleSubmit}>
                    <XSvg className='w-32 lg:hidden fill-white'></XSvg>
                    <h1 className='text-4xl font-extrabold text-white'>join today</h1>
                    <label className='input input-bordered rounded flex items-center gap-2'>
                        <MdOutlineMail></MdOutlineMail>
                        <input type='email' className='grow' placeholder='email' name='email' onChange={handleInputChange}
                        value={formData.email}></input>
                    </label>
                    <div className='flex gap-4 flex-wrap'>
                        <label className='input input-bordered rounded flex items-center gap-2 flex-1'>
                            <FaUser></FaUser>
                            <input type='text' className='grow' placeholder='username' name='username' onChange={handleInputChange}
                            value={formData.username}></input>
                        </label>
                        <label className='input input-bordered rounded flex items-center gap-2 flex-1'>
                            <MdDriveFileRenameOutline></MdDriveFileRenameOutline>
                            <input type='text' className='grow' placeholder='full name' name='fullName' onChange={handleInputChange}
                            value={formData.fullName}></input>
                        </label>
                    </div>
                        <label className='input input-bordered rounded flex items-center gap-2'>
                            <MdPassword></MdPassword>
                            <input type='text' className='grow' placeholder='password' name='password' onChange={handleInputChange}
                            value={formData.password}></input>
                        </label>
                        <button className='btn rounded-full btn-primary text-white'>sign up</button>
                        {isError && <p className='text-red-500'>something went wrong</p>}
                </form>
                <div className='flex flex-col lg:w-2/3 gap-2 mt-4'>
                    <p className='text-white text-lg'>already have an account</p>
                    <Link to='/login'>
                        <button className='btn rounded-full btn-primary text-white btn-outline w-full'>sign in</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage