import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const { loading, signup } = useSignup()

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(inputs)
    }

    return (
        <div className='flex flex-col item-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Signup Smart
                    <span className='text-blue-500'>Chat</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-400'>Full Name</span>
                        </label>
                        <input type='text' placeholder='John Doe' value={inputs.fullName} 
                        onChange={(e) => setInputs({...inputs, fullName: e.target.value})} 
                        className='w-full input input-bordered h-10 bg-gray-700 border-gray-600 text-white' 
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-400'>Username</span>
                        </label>
                        <input type='text' placeholder='johndoe' value={inputs.username} 
                        onChange={(e) => setInputs({...inputs, username: e.target.value})} 
                        className='w-full input input-bordered h-10 bg-gray-700 border-gray-600 text-white' 
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-gray-400'>Password</span>
                        </label>
                        <input type='password' placeholder='Enter password' value={inputs.password} 
                        onChange={(e) => setInputs({...inputs, password: e.target.value})} 
                        className='w-full input input-bordered h-10 bg-gray-700 border-gray-600 text-white' 
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-gray-400'>Confirm Password</span>
                        </label>
                        <input type='password' placeholder='Confirm password' value={inputs.confirmPassword} 
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})} 
                        className='w-full input input-bordered h-10 bg-gray-700 border-gray-600 text-white' 
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                            { loading ? <span className='loading loading-spinner'></span> : 'Signup' }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;