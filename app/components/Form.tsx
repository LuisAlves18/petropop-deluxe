import React, { useState } from 'react';

interface FormProps {
    // You can define any additional props here
}

const MyForm: React.FC<FormProps> = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [valuesArray, setValuesArray] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Add the input value to the array
        setValuesArray(prevArray => [...prevArray, inputValue]);

        // Clear the input field
        setInputValue('');
    };

    return (
        <>
            <div>
                <form className="w-full max-w-sm">
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name"/>
                            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                Sign Up
                            </button>
                            <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                                Cancel
                            </button>
                    </div>
                </form>
            </div>
            <div>

                <form onSubmit={handleSubmit}>
                    <label>
                        Enter Value:
                        <input type="text" value={inputValue} onChange={handleInputChange} />
                    </label>
                    <button type="submit">Add to Array</button>
                </form>

                <div>
                    <h2>Values Array:</h2>
                    <ul>
                        {valuesArray.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MyForm;
