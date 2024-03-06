import {useState} from 'react'

// Reusable Components
// Define a TestCase component with props src, text, altText, and onClick
const TestCase = ({ src, text, altText, onClick }) => (
    // Button with a click handler
    <button className="flex gap-3.5 justify-between" onClick={onClick}>
        {/* Display an image and text */}
        <img loading="lazy" src={src} className="w-6 aspect-square" alt={altText} />
        <div className="grow">{text}</div>
    </button>
);

// Define a SectionCard component with props title and children
const SectionCard = ({ title, children }) => (
    // Display a card with title and content
    <div className="justify-center items-start py-5 pr-16 pl-7 mt-4 whitespace-nowrap bg-zinc-300 bg-opacity-50 max-md:px-5 max-md:max-w-full">
        {title}
        {children}
    </div>
);

// Define the main ProgrammingPlatform component
const ProgrammingPlatform = () => {
    // State for the counter
    const [counter, setCounter] = useState(0);

    // Click handler for Run Code button
    const handleRunCode = () => {
        console.log("Running code");
    };

    // Click handler for Submit Code button
    const handleSubmitCode = () => {
        console.log("Submitting code");
    };

    // Click handler for TestCase button
    const handleTestCaseClick = () => {
        console.log("Test case clicked");
    };

    // Render the main content
    return (
        <div className="flex flex-col px-3.5 py-3 bg-white">
            {/* Header section */}
            <header className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
                {/* Display featured content and timer */}
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e5753b456311ddb5a4de4e65d0d162dc177dcd7c334a21252c464f115f64a0d?apiKey=b0951f87dee4449fa252b5f3cfc3b012&" alt="Featured content" className="max-w-full aspect-[2.7] w-[169px]" />
                <div className="flex gap-3 self-stretch my-auto text-xl font-medium text-black whitespace-nowrap">
                    {/* Display timer icon and time */}
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe6d87bb03995c2de1d7bd0fd5174b69905fbe3f728b9c194864720c71058408?apiKey=b0951f87dee4449fa252b5f3cfc3b012&" className="w-6 aspect-square" alt="Timer icon" />
                    <time className="grow self-start mt-2">00:00:00</time>
                </div>
                <div className="flex gap-5 justify-between pr-4 mt-2.5 bg-zinc-300 max-md:flex-wrap max-md:max-w-full">
                    {/* Display Your Solution box and solution icons */}
                    <div className="justify-center items-center px-16 py-5 text-xl font-medium text-black whitespace-nowrap bg-zinc-400 max-md:px-5">
                        Your Solution
                    </div>
                    <div className="flex gap-5 justify-between my-auto">
                        {/* Display solution icons */}
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b787c93f41e9032cf4d83e07cc3e5fc1fcbe8d67ac73e7a25aa884ba225ed9d0?apiKey=b0951f87dee4449fa252b5f3cfc3b012&" className="w-10 aspect-square" alt="Solution icon 1" />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa9e34544ad2ec2c915ca23d43453077c015c42b15ad3769897c7b3865d38458?apiKey=b0951f87dee4449fa252b5f3cfc3b012&" className="w-10 aspect-square" alt="Solution icon 2" />
                    </div>
                </div>
            </header>

            {/* Main content section */}
            <main className="flex gap-2.5 justify-between items-start mt-4 text-xl font-medium text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                {/* Display Prompt and Scratchpad cards */}
                <SectionCard title="Prompt" />
                <SectionCard title="Scratchpad" />
                {/* Display Python card with language image */}
                <SectionCard title="">
                    <div>Python</div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf52538428e555da453a017ada946d0518e69e46b682ef6bb950da8ac7bb6578?apiKey=b0951f87dee4449fa252b5f3cfc3b012&" alt="Python programming language" className="my-auto aspect-[3.33] fill-black w-[33px]" />
                </SectionCard>
            </main>

            {/* Additional content section */}
            <section className="flex gap-3.5 justify-between mt-4 max-md:flex-wrap max-md:max-w-full">
                {/* Display Question and Input/Output/Hint cards */}
                <article className="flex flex-col flex-1 text-xl font-medium text-black max-md:max-w-full">
                    <SectionCard title="Question">
                        {/* Display question content */}
                        <p>.............<br />.....................................<br />........................................................<br />.........................................................................<br />.......................................................................................<br />.................</p>
                    </SectionCard>
                    <SectionCard title="Input" />
                    <SectionCard title="Output" />
                    <SectionCard title="Hint 1......................................................................" />
                    <SectionCard title="Hint 2......................................................................" />
                    <SectionCard title="Hint 3......................................................................" />
                    {/* Display additional cards with background */}
                    <div className="shrink-0 mt-4 bg-gray-200 h-[60px] max-md:max-w-full" />
                    <div className="shrink-0 mt-2.5 bg-gray-200 h-[78px] max-md:max-w-full" />
                    <div className="shrink-0 mt-4 bg-gray-200 h-[101px] max-md:max-w-full" />
                </article>
                {/* Display an aside with background */}
                <aside className="flex flex-col px-1.5 pt-1.5 pb-12 rounded-xl shadow-sm basis-0 bg-neutral-50 max-md:hidden">
                    <div className="shrink-0 bg-stone-300 h-[78px] rounded-[50px]" />
                </aside>
                {/* Display code content */}
                <section className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="flex gap-5 justify-between py-2 pr-1 pl-6 bg-zinc-300 bg-opacity-50 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
                        <div className="flex-auto self-start mt-5 text-xl font-medium leading-6 text-teal-600 max-md:max-w-full">
                            {/* Display code snippets */}
                            <span className="text-sm leading-6 text-zinc-500"> # Python Programming: Mastering Python </span>
                            <span className="text-sm leading-6 text-amber-500 "> # Introduction print </span>
                            <span className="text-sm leading-6 text-teal-600 "> (&quot;Welcome to Mastering Python: A Comprehensive Guide for Beginners &quot;) </span>
                            <span className="text-sm leading-6 text-zinc-500"> # Chapter 1: Getting Started with Python </span>
                            <span className="text-sm leading-6 text-amber-500 "> print</span>
                            <span className="text-sm leading-6 text-teal-600 "> (&quot;Chapter 1: Getting Started with Python&quot;) print(&quot;-&quot; * 40) </span>
                            <span className="text-sm leading-6 text-amber-500 "> print</span>
                            <span className="text-sm leading-6 text-teal-600 "> (&quot;Python is a popular programming language known for its simplicity and versatility.&quot;) </span>
                            <span className="text-sm leading-6 text-amber-500 "> print</span>
                            <span className="text-sm leading-6 text-teal-600 "> (&quot;Let's write our first Python program: &quot;) </span>
                            <br />
                            <span className="text-sm leading-6 text-zinc-500"> # Chapter 1: Getting Started with Python </span>
                        </div>
                    </div>

                    {/* Footer section with Run Code and Submit Code buttons */}
                    <footer className="flex gap-2.5 self-end mt-3 text-xl font-medium text-white whitespace-nowrap">
                        <button
                            className="grow justify-center px-12 py-5 bg-violet-800 max-md:px-5"
                            onClick={handleRunCode}
                        >
                            Run Code
                        </button>
                        <button
                            className="grow justify-center px-9 py-5 bg-violet-800 max-md:px-5"
                            onClick={handleSubmitCode}
                        >
                            Submit Code
                        </button>
                    </footer>
                </section>
            </section>

            {/* Final section with congratulations and test cases */}
            <footer className="flex flex-col py-7 mt-2.5 text-xl font-medium text-black bg-zinc-300 bg-opacity-50 max-md:max-w-full">
                <div className="self-center whitespace-nowrap">
                    Yay, You passed your all test codes!
                </div>
                <div className="flex flex-col px-6 mt-4 max-md:px-5 max-md:max-w-full">
                    <div className="text-xs max-md:max-w-full">4/4 test codes passed.</div>
                    {/* Display test cases using the TestCase component */}
                    {[
                        {
                            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3e71e0b613f5180331423dc614e68f3af493269eeeb998702b1494ca22da46ac?apiKey=b0951f87dee4449fa252b5f3cfc3b012&',
                            text: 'Test case 1 passed!',
                            altText: 'Test case 1',
                        },
                        {
                            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f19a4ab3bdbf58393bc8f383648ce3d46a6a4c218438e9c717e0de7af0b8424d?apiKey=b0951f87dee4449fa252b5f3cfc3b012&',
                            text: 'Test case 2 passed!',
                            altText: 'Test case 2',
                        },
                        {
                            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3e71e0b613f5180331423dc614e68f3af493269eeeb998702b1494ca22da46ac?apiKey=b0951f87dee4449fa252b5f3cfc3b012&',
                            text: 'Test case 3 passed!',
                            altText: 'Test case 3',
                        },
                        {
                            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f19a4ab3bdbf58393bc8f383648ce3d46a6a4c218438e9c717e0de7af0b8424d?apiKey=b0951f87dee4449fa252b5f3cfc3b012&',
                            text: 'Test case 4 passed!',
                            altText: 'Test case 4',
                        },
                    ].map((test, index) => (
                        <TestCase key={index} src={test.src} text={test.text} altText={test.altText} onClick={handleTestCaseClick} />
                    ))}
                </div>
            </footer>
        </div>
    );
};

// Export the ProgrammingPlatform component as default
export default ProgrammingPlatform;
