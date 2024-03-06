import  { useState } from 'react';

const InfoItem = ({ title, imgSrc, imgAlt, onItemClick }) => {
    return (
        <button
            className="flex gap-1 justify-between px-6 py-2.5 bg-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 max-md:px-5"
            onClick={onItemClick}
        >
            <div className="grow">{title}</div>
            <img
                loading="lazy"
                src={imgSrc}
                alt={imgAlt}
                className="self-start w-3.5 aspect-square"
            />
        </button>
    );
};

const CandidateInfo = () => {
    const [selectedItem, setSelectedItem] = useState('');

    const infoItems = [
        {
            title: 'Candidate name',
            imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee624b8acebb61f9caf13a91e943582a2b8b084bb1659765d5541f977f7ec4e8?apiKey=b0951f87dee4449fa252b5f3cfc3b012&',
            imgAlt: 'icon representing candidate name'
        },
        {
            title: 'Designation',
            imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a02eb8dab0636a7bc15c848c3defff0eee4f494ed1ceffe8e3087854dc893ae5?apiKey=b0951f87dee4449fa252b5f3cfc3b012&',
            imgAlt: 'icon representing designation'
        },
        {
            title: 'Status',
            imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a02eb8dab0636a7bc15c848c3defff0eee4f494ed1ceffe8e3087854dc893ae5?apiKey=b0951f87dee4449fa252b5f3cfc3b012&',
            imgAlt: 'icon representing status'
        },
        {
            title: 'AI Report',
            imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a02eb8dab0636a7bc15c848c3defff0eee4f494ed1ceffe8e3087854dc893ae5?apiKey=b0951f87dee4449fa252b5f3cfc3b012&',
            imgAlt: 'icon representing AI report'
        },
        {
            title: 'Email',
            imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0ba0a034c70287db10e1cd8e1ae0a1ba88b08efd50cf357f2b662a4245dfba22?apiKey=b0951f87dee4449fa252b5f3cfc3b012&',
            imgAlt: 'icon representing email'
        },
        {
            title: 'Mobile Number',
            imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a02eb8dab0636a7bc15c848c3defff0eee4f494ed1ceffe8e3087854dc893ae5?apiKey=b0951f87dee4449fa252b5f3cfc3b012&',
            imgAlt: 'icon representing mobile number'
        },
        {
            title: 'Applied On',
            imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0ba0a034c70287db10e1cd8e1ae0a1ba88b08efd50cf357f2b662a4245dfba22?apiKey=b0951f87dee4449fa252b5f3cfc3b012&',
            imgAlt: 'icon representing application date'
        },
        {
            title: 'Action',
            imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0ba0a034c70287db10e1cd8e1ae0a1ba88b08efd50cf357f2b662a4245dfba22?apiKey=b0951f87dee4449fa252b5f3cfc3b012&',
            imgAlt: 'icon representing actions'
        },
    ];

    const handleItemClick = (title) => {
        setSelectedItem(title);
        console.log(`${title} Clicked`);
    };

    return (
        <div className="flex gap-5 justify-between px-6 py-3.5 text-xs font-semibold text-black whitespace-nowrap bg-neutral-100 max-md:flex-wrap max-md:px-5">
            {infoItems.map((item, index) => (
                <InfoItem
                    key={index}
                    title={item.title}
                    imgSrc={item.imgSrc}
                    imgAlt={item.imgAlt}
                    onItemClick={() => handleItemClick(item.title)}
                />
            ))}
            <div className="text-lg font-medium text-gray-900">Selected Item: {selectedItem}</div>
        </div>
    );
};

export default CandidateInfo;