import lottie404 from '../../Lottie/lottie404.json'
import Lottie from "lottie-react";
import NavLeft from '../Shared/NavLeft/NavLeft';
import Header from '../Shared/Header/Header';
import NavRight from '../Shared/NavRight/NavRight';
import Foot from '../Shared/Footer/Foot';

const ErrorPage = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-between min-h-[calc(100vh-80px)]">
                <NavLeft />
                <div className="w-[90%] bg-[#F2F2F2]">
                    <Lottie animationData={lottie404}></Lottie>
                </div>
                <NavRight />
            </div>
            <Foot />
        </div>
    );
};

export default ErrorPage;