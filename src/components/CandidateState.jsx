

const StatCard = ({ label, imgSrc, altText, onClick }) => (
    <button
        onClick={onClick}
        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 flex flex-col justify-center aspect-[1.74] text-neutral-900"
    >
        <div className="flex gap-1.5 justify-between px-3 py-4 bg-white border border-solid border-zinc-100 border-opacity-50 rounded-[50px]">
            <div>{label}</div>
            <img loading="lazy" src={imgSrc} alt={altText} className="self-start w-3 aspect-[1.72]" />
        </div>
    </button>
);

const CandidateStatsComponent = () => {
    const cardData = [
        {
            label: "New",
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/286f56757663579d78695c08712f831b52d3123aa85acc4c69c0e52593b3707f?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
            altText: "New candidates",
            onClick: () => alert("New candidates")
        },
        {
            label: "Position",
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1a486bf65ca473229571accd484d4278ac46531ae86ebffa16cdb7bd422683a?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
            altText: "Position type",
            onClick: () => alert("Position type")
        },
        {
            label: "Design.",
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e10a13d701bf5eea10e855d9c57e1150a5db6c9a0f35992b703af8281500eea3?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
            altText: "Design category",
            onClick: () => alert("Design category")
        }
    ];

    return (
        <>
            <header className="flex gap-5  justify-evenly  font-semibold max-md:flex-wrap">
                <section className="flex flex-row items-center px-5 py-1">
                    <h1 className="text-2xl text-white">Candidates</h1>
                    <h2 className="mt-4 text-xl text-white">112 Total candidates</h2>
                    <div className="flex gap-4 self-stretch mt-9 text-xs whitespace-nowrap">
                        {cardData.map((data, index) => (
                            <StatCard key={index} label={data.label} imgSrc={data.imgSrc} altText={data.altText} onClick={data.onClick} />
                        ))}
                    </div>
                    <div className="flex gap-5 justify-between items-center self-start px-5 text-xs text-white">
                        <button
                            onClick={() => alert("Upload CV")}
                            className="self-stretch my-auto whitespace-nowrap bg-transparent border-none cursor-pointer"
                        >
                            Upload CV
                        </button>
                        <button
                            onClick={() => alert("Upload from Excel")}
                            className="flex-auto self-stretch my-auto bg-transparent border-none cursor-pointer"
                        >
                            Upload from Excel
                        </button>
                        <button
                            onClick={() => alert("Add New Job")}
                            className="flex gap-2.5 justify-between self-stretch px-3.5 py-2.5 whitespace-nowrap rounded-xl border border-white border-solid bg-white bg-opacity-0"
                        >
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10a13d701bf5eea10e855d9c57e1150a5db6c9a0f35992b703af8281500eea3?apiKey=b0951f87dee4449fa252b5f3cfc3b012&" alt="Add new job" className="self-start w-3.5 aspect-square fill-white" />
                            <span className="grow">Add New Job</span>
                        </button>
                    </div>
                </section>
            </header>
        </>
    );
};

export default CandidateStatsComponent;