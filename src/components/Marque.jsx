import Marquee from "react-fast-marquee";


const Marque = () => {
    return (
        <div className="bg-slate-200 flex items-center mb-2">
            <div className="bg-red-600 p-2 text-white font-bold flex items-center justify-center">
                <p className="text-center">Popular Book </p>
            </div>
            <Marquee
                pauseOnHover={true}
            >
                <div className="flex items-center gap-4">
                    <p className="text-lg font-semibold  hover:text-red-500">📚 Clean Code Principles. </p>
                    <p className="text-lg font-semibold  hover:text-red-500">📚 The Brain and Beyond </p>
                    <p className="text-lg font-semibold  hover:text-red-500">📚 Genetics Simplified. </p>
                    <p className="text-lg font-semibold  hover:text-red-500">📚 React in Action. </p>
                    <p className="text-lg font-semibold  hover:text-red-500">📚 Ecos of the Past. </p>
                    <p className="text-lg font-semibold  hover:text-red-500">📚 The Cosmos Explained. </p>
                    <p className="text-lg font-semibold  hover:text-red-500">📚 JavaScript Deep Dive. </p>
                </div>
            </Marquee>
        </div>
    );
};

export default Marque;