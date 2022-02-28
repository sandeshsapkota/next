import Button from "../Buttons/Button";
import {UserContext} from "../../UserProvider";
import {useContext, useState} from "react";

export  default function Login() {
    const [userDetail,setUserDetail] = useContext(UserContext)

    const [formState, setFormState] = useState({
        username: '',
        password: '',
        error: {
            username: '',
            password: '',
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const {username, password} = formState
        const {cre_username, cre_password} = userDetail
        const isCorrectUserName = username === cre_username;
        const isCorrectPassword = password === cre_password;

        let error = {
            username: '',
            password: '',
        }

        // username validation
        if(username) {
            error.username = ''
            if(username !== cre_username) {
                error.username = 'Username incorrect !'
            }
        }else{
            error.username = 'Username is required!'
        }

        // password validation
        if(password) {
            error.password = ''
            if(password !== cre_password) {
                error.password = 'password incorrect !'
            }
        }else{
            error.password = 'password is required!'
        }

        setUserDetail(prevState => {
            return {
                ...prevState,
                login: isCorrectPassword && isCorrectUserName,
                isCorrectUserName: isCorrectUserName,
                isCorrectPassword: isCorrectPassword,
                error: error,
            }
        })
    }

    const handleChange = (e) => {
        const inputField = e.target;
        const {value,name} = inputField;

        if(inputField) {
            setFormState(prevState => {
                return {  ...prevState,[name]:value,}
            })

            setUserDetail(prevState => {
                return {  ...prevState,error: {...prevState.error,[name]: ''} }
            })
        }
    }

    return (
        <div className={'header-footer-height-deduct py-10 flex items-center'}>
                <div className="container">
                    <div className="card dark:bg-gray-900 md:w-4/5 lg:w-3/5 mx-auto ">
                        <div className="text-center">
                            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
                            <p className="text-gray-500 dark:text-gray-400">Sign in to access your account</p>
                        </div>
                        <div className="m-7">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="mb-6">
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm text-gray-600 dark:text-gray-400">User Name</label>
                                    <input onChange={handleChange} type="text" name="username" id="username"
                                           placeholder="Enter your User Name"
                                           className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                                    {userDetail.error.username &&  <span className={'text-red-400 py-1 text-xs'}>{userDetail.error.username }</span>}
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password"
                                               className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                        <a href="#!"
                                           className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot
                                            password?</a>
                                    </div>
                                    <input onChange={handleChange} type="password" name="password" id="password"
                                           placeholder="Your Password"
                                           className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                                    {userDetail.error.password && <span className={'text-red-400 py-1 text-xs'}>Password is required.</span>}
                                </div>
                                <div className="grid mb-6 text-center">
                                    <Button className={'text-center'}> Sign up</Button>
                                </div>
                                <p className="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a
                                    href="#!"
                                    className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign
                                    up</a>.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}