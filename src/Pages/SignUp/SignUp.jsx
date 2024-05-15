import { Button, Card, Checkbox, Label } from "flowbite-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { CiWarning } from "react-icons/ci";
import useAuth from "../../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/Loader";

const SignUp = () => {
    const { createUser, updateUserProfile, loading } = useAuth()

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { email, password, name } = data;
        try {
            const result = await createUser(email, password)
            if (result?.user) {
                try {
                    const result = await updateUserProfile(name)
                    if (result.user) {
                        toast.success('Successfully Sign Up', { position: "top-center" })
                    }
                } catch (error) {
                    console.error(error.message);
                }
            }
            // console.log(result.user);
        } catch (error) {
            if (error) {
                toast.error(`${error.message === 'Firebase: Error (auth/invalid-credential).' ? 'Invalid email or password' : error.message}`, { position: "top-center" })
            }
        }
    }

    if(loading){
        return <Loader />
    }


    return (
        <div className="h-full">
            <div className="flex items-center justify-center border-2 border-black h-20 mb-5">
                <h2 className="text-3xl font-bold uppercase">Sign up</h2>
            </div>
            <div className="flex items-center justify-center h-full">
                <Card className="w-1/4 rounded-none shadow-none border-none">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="username" value="Full Name" />
                                <span className="text-red-600"> *</span>
                            </div>
                            <input {...register("name", { required: 'Name is required.' })} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" />
                            {errors?.name && <p role="alert" className="text-red-600 text-sm mt-2 flex items-center gap-1"><span className="text-lg"><CiWarning /></span> {errors?.name.message}</p>}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                                <span className="text-red-600"> *</span>
                            </div>
                            <input {...register("email", { required: 'Email address is required' })} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="saga@scribe.com" />
                            {errors?.email && <p role="alert" className="text-red-600 text-sm mt-2 flex items-center gap-1"><span className="text-lg"><CiWarning /></span> {errors?.email.message}</p>}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Password" />
                                <span className="text-red-600"> *</span>
                            </div>
                            <input {...register("password", {
                                required: 'Password is required.', minLength: { value: 6, message: 'Password must exceed 6 characters.' }, pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/,
                                    message: 'Password should contain at least one uppercase letter, one special character and one numeric character.'
                                }
                            })} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
                            {errors?.password && <p role="alert" className="text-red-600 text-sm mt-2 flex items-center gap-1"><span className="text-lg"><CiWarning /></span> {errors?.password.message}</p>}
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox className="rounded-sm" {...register('terms', { required: 'Please accept terms and conditions.' })} id="terms" />
                            <Label htmlFor="terms">I agree with the</Label>
                            <Link><span>terms and conditions.</span></Link>
                        </div>
                        {errors?.terms && <p role="alert" className="text-red-600 text-sm -mt-2 flex items-center gap-1"><span className="text-lg"><CiWarning /></span> {errors?.terms.message}</p>}
                        <Button className="rounded-sm mt-4" type="submit">Sign Up</Button>
                    </form>
                    <h2 className="text-center">Already have an account? <Link to='/login' className="font-semibold underline">Sign In</Link></h2>
                </Card>
                <ToastContainer
                    position="top-center"
                />
            </div>
        </div>
    );
};

export default SignUp;