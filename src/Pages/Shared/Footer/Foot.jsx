import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const Foot = () => {
    return (
        <div>
            <Footer container className="bg-black text-white rounded-none">
                <div className="w-full text-center">
                    <div className="max-w-screen-xl mx-auto justify-between sm:flex sm:items-center sm:justify-between">
                        <Link to='/'><h1 className="text-3xl font-bold">SAGASCRIBE</h1></Link>
                        <Footer.LinkGroup>
                            <Footer.Link href="#">About</Footer.Link>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Licensing</Footer.Link>
                            <Footer.Link href="#">Contact</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                </div>
            </Footer>
        </div>
    );
};

export default Foot;