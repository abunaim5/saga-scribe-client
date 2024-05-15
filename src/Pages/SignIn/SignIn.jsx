import { Button, Card, Checkbox, Label } from "flowbite-react";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { CiWarning } from "react-icons/ci";
import useAuth from "../../Hooks/useAuth";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const SignIn = () => {
    const { signInUser, signInWithGoogle, loading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            const result = await signInUser(email, password)
            if (result.user) {
                toast.success('Successfully login', { position: "top-center" });
                navigate(location.state ? location.state : '/')
            }
        } catch (error) {
            if (error) {
                if (error) {
                    toast.error(`${error.message === 'Firebase: Error (auth/invalid-credential).' ? 'Invalid email or password' : error.message}`, { position: "top-center" })
                }
            }
        }

        console.log(data)
    }

    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithGoogle();
            if (result.user) {
                toast.success('Successfully login with google', { position: "top-center" })
                navigate(location.state ? location.state : '/')
            }
            console.log(result.user);
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
                <h2 className="text-3xl font-bold uppercase">Sign in</h2>
            </div>
            <div className="flex items-center justify-center h-full">
                <Card className="w-1/4 rounded-sm shadow-none border-none">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
                            <input {...register("password", { required: 'Password is required.' })} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
                            {errors?.password && <p role="alert" className="text-red-600 text-sm mt-2 flex items-center gap-1"><span className="text-lg"><CiWarning /></span> {errors?.password.message}</p>}
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox className="rounded-sm" {...register('terms')} id="terms" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button className="rounded-sm mt-4 uppercase" type="submit">Login</Button>
                        <Button onClick={handleSignInWithGoogle} className="rounded-sm bg-transparent border border-teal-600 enabled:hover:bg-transparent text-black uppercase" type="button"><span className="flex items-center gap-3"><span className="text-lg"><FaGoogle /></span>Login with Google</span></Button>
                        <Button className="rounded-sm bg-transparent border border-teal-600 enabled:hover:bg-transparent text-black uppercase" type="button"><span className="flex items-center gap-3"><span className="text-lg"><FaGithub /></span>Login with Github</span></Button>
                    </form>
                    <h2 className="text-center">Don&apos;t have an account? <Link to='/register' className="font-semibold underline">Sign up</Link></h2>
                </Card>
                <ToastContainer
                    position="top-center"
                />
            </div>
        </div>
    );
};

export default SignIn;