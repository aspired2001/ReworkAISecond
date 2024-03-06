import { useState } from 'react';
import CandidateStatsComponent from './CandidateState';

function NavigationItem({ children, onClick }) {
    return (
        <button
            className="self-stretch my-auto text-white hover:text-violet-300 transition-colors duration-300"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function DashboardLayout() {
    const navItems = [
        "Dashboard", "Post / Add Jobs", "Coupons", "Request Feature", "Help & Support",
        "Setting", "Interview", "Team", "Feedback", "Bulk Screen", "Vendor",
    ];

    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        console.log(`Searching for ${searchValue}`);
    };

    const handleNavItemClick = (itemName) => {
        console.log(`${itemName} Clicked`);
    };

    return (
        <div className="flex flex-col px-16 py-7 bg-violet-800 sm:px-5">
            <header className="flex gap-5 justify-between items-center w-full sm:flex-wrap sm:max-w-full">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/386813dab5451a2d1318d9d719fd6e2d8d9c135c89ad88b88a1e308792479a00?apiKey=b0951f87dee4449fa252b5f3cfc3b012&" alt="Logo" className="max-w-full aspect-square w-[223px]" loading="lazy" />
                <div className="flex items-center gap-5 p-2.5 my-auto bg-white rounded-md text-neutral-400 sm:flex-wrap sm:max-w-full">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchValue}
                        onChange={handleSearchChange}
                        className="p-2 text-xs w-full"
                    />
                    <button onClick={handleSearch} className="aspect-square fill-violet-800 w-[15px]">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cf970773e79436e1d1fd889ee9c8d20c2d8ac0e2abf55c01f81d669a8bd71a6?apiKey=b0951f87dee4449fa252b5f3cfc3b012&" alt="Search Icon" loading="lazy" />
                    </button>
                </div>
                <div className="flex gap-2.5 self-stretch my-auto">
                    <button className="flex justify-center items-center px-3 aspect-square bg-white bg-opacity-10 h-[35px] rounded-full w-[35px]">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa545e6956d0cf53163b66f033c7fb39b48dc70ed0eff11f35da5d49ebbea285?apiKey=b0951f87dee4449fa252b5f3cfc3b012&" alt="User Icon" className="w-full aspect-[0.87] fill-white" loading="lazy" />
                    </button>
                    <div className="flex overflow-hidden relative flex-col justify-center aspect-[3.97] w-[139px]">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb3c4c17b054a5e65ac357cb6120816acd48f80f90056b67d96bfb34c031b9c5?apiKey=b0951f87dee4449fa252b5f3cfc3b012&" alt="Notification Icon" className="object-cover absolute inset-0 w-full h-full" loading="lazy" />
                        <div className="relative shrink0 rounded-xl bg-white bg-opacity-10 h-[35px]" />
                    </div>
                </div>
            </header>
            <nav className="flex gap-5 justify-between self-center mt-6 ml-0 text-base text-white sm:flex-wrap sm:max-w-full">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8f3185263913b99702465655d5d3e83008e67a764c96052fd70815002fb2de8?apiKey=b0951f87dee4449fa252b5f3cfc3b012&" alt="Dashboard Icon" className="my-auto aspect-[0.95] fill-white w-[19px]" loading="lazy" />
                <div className="flex gap-4 justify-between items-center sm:flex-wrap sm:max-w-full">
                    {navItems.map((item, index) => (
                        <NavigationItem key={index} onClick={() => handleNavItemClick(item)}>
                            {item}
                        </NavigationItem>
                    ))}
                </div>
            </nav>
            <div>
            <CandidateStatsComponent/>
            </div>
        </div>
    );
}

export default DashboardLayout;