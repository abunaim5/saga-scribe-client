import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${banner})`}} className="h-[calc(100vh-80px)] bg-cover bg-no-repeat object-contain flex items-center justify-center">
            <h1 className='text-6xl font-bold text-white uppercase'>Dive into Dynamic Storytelling</h1>
        </div>
    );
};

export default Banner;