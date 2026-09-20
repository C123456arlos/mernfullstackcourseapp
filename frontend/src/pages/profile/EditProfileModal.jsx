import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const EditProfileModal = ({authUser}) => {
    const [formData, setFormData] = useState({
        // fullName: '',username: '',email: '',bio: '',link:'', newPassword:'', currentPassword:''
    })
    
    const queryClient= useQueryClient()
    const { mutate: updateProfile, isPending: isUpdatingProfile } = useMutation({
        mutationFn: async () => {
            try {
                const res = await fetch(`/api/users/update`, {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(formData)
                })
                const data = await res.json()
                if (res.ok) {
                    throw new Error(data.error || 'something went wrong')
                }
                return data
            } catch (error) {
                throw new Error(error.message)
            }
        },
        onSuccess: () => {
            toast.success('profile updated successfully')
            Promise.all([
                queryClient.invalidateQueries({queryKey:['authUser']}),
                queryClient.invalidateQueries({queryKey:['userProfile']}),
            ])
        }
    })
    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    useEffect(() => {
        if (authUser) {
            setFormData({
                fullName: authUser.fullName,
                username: authUser.username,
                email: authUser.email,
                bio: authUser.bio,
                link: authUser.link,
                newPassword: '',
                currentPassword:''
            })
        }
    },[authUser])
    return (
        <>
            <button className="btn btn-outline rounded-full btn-sm"
                onClick={() => document.getElementById('edit_profile_modal').showModal()}>edit profile</button>
            {/* <button className="btn btn-outline rounded-full btn-sm" 
                onClick={() => document.getElementById('edit_profile_modal')}>edit profile</button> */}
            <dialog id="edit_profile_modal" className="modal">
                <div className="modal-box border rounded-md border-gray-700 shadow-end">
                    <h3 className="font-bold text-lg my-3">update profile</h3>
                    <form className="flex flex-col gap-4" onSubmit={(e) => {
                        // e.preventDefault();
                        updateProfile()
                    }}>
                        <div className="flex flex-wrap gap-2">
                            <input type="text" placeholder="full name" className="flex-1 input border border-gray-700 rounded p-2 input-md" value={formData.fullName} name='fullName' onChange={handleInputChange}></input>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <input type="text" placeholder="username" className="flex-1 input border border-gray-700 rounded p-2 input-md" value={formData.username} name='username' onChange={handleInputChange}></input>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <input type="email" placeholder="email" className="flex-1 input border border-gray-700 rounded p-2 input-md" value={formData.email} name='email' onChange={handleInputChange}></input>
                            <textarea  placeholder="bio" className="flex-1 input border border-gray-700 rounded p-2 input-md" value={formData.bio} name='bio' onChange={handleInputChange}></textarea>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            
                        <input type="password" placeholder='password' className="flex-1 input border border-gray-700 rounded p-2 input-md" value={formData.currentPassword} name="currentPassword" onChange={handleInputChange}></input>
                        <input type="password" placeholder='new password' className="flex-1 input border border-gray-700 rounded p-2 input-md" value={formData.newPassword} name="newPassword" onChange={handleInputChange}></input>
                        <input type="text" placeholder='link' className="flex-1 input border border-gray-700 rounded p-2 input-md" value={formData.link} name="link" onChange={handleInputChange}></input>
                                                </div>
                        <button className="btn btn-primary rounded-full btn-sm text-white" type="submit">
                            {isUpdatingProfile ?'updating':'udpate'}
                        </button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button className="outline-none">close</button>
                </form>

            </dialog>
    </>
  )
}

export default EditProfileModal