import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${banner})`}} className="h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat object-contain flex items-center justify-center">
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase text-center px-2'>Dive into Dynamic Storytelling</h1>
        </div>
    );
};

export default Banner;