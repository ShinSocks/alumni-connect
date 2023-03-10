import React from 'react'
import { useState } from 'react'

export default function ProfilePage() {
    const [formData, setFormData] = useState({
        name: "Name",
        email: "placeholder@email.com"
    })
    const {name, email} = formData
    return (
        <>
            <section className = "max-w-6xl mx-auto flex justify-center items-center flex-col">
                <h1 className = "text-3xl text-center mt-6 font-bold">My Profile</h1>
                <div className = "w-full md:w-[50%] mt-6 px-3">
                    <form>
                        {/*Name Input*/}
                        <input type = "text" id="name" value={name} disabled className='w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'/>
                        {/*Email Input*/}
                        <input type = "text" id="email" value={email} disabled className='w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'/>

                        <div className = "flex justify-between whitespace-nowrap text-sm sm:text-lg">
                            <p className = "flex items-center mb-6">Edit information</p>
                            <p>Sign out</p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
