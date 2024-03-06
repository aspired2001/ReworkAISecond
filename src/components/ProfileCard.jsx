

const ProfileCard = ({ name, role, status, progress, email, phoneNumber, date, imageSrc, progressBarImageSrc, actionIcons }) => {
    return (
        <div className="flex gap-5 justify-between items-center px-6 py-7 w-full bg-white sm:flex-wrap sm:px-5">
            <div className="flex gap-5 justify-between self-start px-6 text-xs font-semibold text-black sm:pr-5">
                <div className="my-auto bg-white rounded-md border border-gray-200 h-[18px] w-[18px]" />
                <div className="flex gap-4 justify-between">
                    <img loading="lazy" src={imageSrc} alt="" className="rounded-full aspect-square w-[35px]" />
                    <div>{name}</div>
                </div>
            </div>
            <div className="text-xs font-semibold text-black">{role}</div>
            <div className="grow justify-center px-7 py-2.5 text-xs font-semibold text-black whitespace-nowrap bg-rose-100 rounded-full sm:px-5">{status}</div>
            <div className="flex gap-1.5 my-auto text-xs font-semibold text-black whitespace-nowrap">
                <img loading="lazy" src={progressBarImageSrc} alt="" className="my-auto aspect-[5.56] w-[55px]" />
                <div className="grow">{progress}%</div>
            </div>
            <div className="text-xs font-semibold text-black">{email}</div>
            <div className="text-xs font-semibold text-black">{phoneNumber}</div>
            <div className="text-xs font-semibold text-black">{date}</div>
            <div className="flex gap-2.5 justify-center self-start px-1.5">
                {actionIcons.map((icon, index) => (
                    <div key={index} className="flex justify-center items-center px-2 bg-white aspect-square h-[35px] rounded-full w-[35px]">
                        <img loading="lazy" src={icon.src} alt={icon.alt} className="w-full aspect-square" />
                    </div>
                ))}
            </div>
        </div>
    );
};

const TeamDashboard = () => {
    const employeeProfiles = [
        {
            name: "Avinash Rai",
            role: "Project Manager",
            status: "PENDING",
            progress: 30,
            email: "avirai@gmail.com",
            phoneNumber: "955684578",
            date: "10/01/2024",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/86cdd73653d7cf251bddac9e7468a382ee110548d3fb34bd839ab9eff94a7178?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
            progressBarImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/94c8ff93241e477d51791980c544bda0c7e6a4a2c1a4154e7fc3ff8888125f89?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
            actionIcons: [
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/14b64592ef221144aac8f533bedfb9c32b9a91714747d45f9a69030148928d0f?apiKey=b0951f87dee4449fa252b5f3cfc3b012&", alt: "Edit icon" },
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a52a584f4ac5a90226eba8c3e48a9e69a7279b702191259b2ac1a71b12d9eb32?apiKey=b0951f87dee4449fa252b5f3cfc3b012&", alt: "Delete icon" },
            ],
        },
        // Repeat for each employee profile...
    ];

    return (
        <main>
            {employeeProfiles.map((profile, index) => (
                <ProfileCard key={index} {...profile} />
            ))}
        </main>
    );
};

export default TeamDashboard;