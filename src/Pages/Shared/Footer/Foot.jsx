import { Footer } from "flowbite-react";

const Foot = () => {
    return (
        <div>
            <Footer container>
                <div className="w-full text-center">
                    <div className="max-w-screen-xl mx-auto justify-between sm:flex sm:items-center sm:justify-between">
                        {/* <Footer.Brand
                            href="https://flowbite.com"
                            src="https://flowbite.com/docs/images/logo.svg"
                            alt="Flowbite Logo"
                            name="Flowbite"
                        /> */}
                        <h1 className="text-3xl font-bold">SAGASCRIBE</h1>
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