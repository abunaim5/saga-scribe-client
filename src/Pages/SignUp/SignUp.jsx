import { Button, Card, Checkbox, Label } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <Card className="w-1/4 rounded-none shadow-none border-none">
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="username" value="Full Name" />
                            <span className="text-red-600"> *</span>
                        </div>
                        <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Email" />
                            <span className="text-red-600"> *</span>
                        </div>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Password" />
                            <span className="text-red-600"> *</span>
                        </div>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">I agree with the</Label>
                        <Link><span>terms and conditions</span></Link>
                    </div>
                    <Button className="rounded-sm" type="submit">Sign Up</Button>
                </form>
            </Card>
        </div>
    );
};

export default SignUp;