import React, { useState, useEffect } from 'react';

const backendApiUrl = import.meta.env.VITE_BACKEND_API_URL

const HelpCenter = () => {
    const [cards, setCards] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [newCard, setNewCard] = useState({ title: '', description: '' });

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        try {
            const response = await fetch(`${backendApiUrl}/cards`);
            if (!response.ok) {
                throw new Error('Failed to fetch cards');
            }
            const data = await response.json();
            setCards(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCreateCard = async () => {
        try {
            const response = await fetch(`${backendApiUrl}/cards`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCard),
            });
            if (!response.ok) {
                throw new Error('Failed to create card');
            }
            fetchCards(); // Refresh the cards list
            setNewCard({ title: '', description: '' }); // Clear the input fields
            setShowPopup(false); // Close the popup
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='transition-all duration-500'>
            <div className='relative bg-[#dadbf0] w-full h-[400px] flex flex-col items-center justify-center gap-10 '>
                <h1 className='text-4xl md:text-6xl lg:text-7xl px-5 text-black font-semibold text-center'>How can we help?</h1>
                <div className='relative w-full md:w-[700px] px-5'>
                    <div className='absolute right-6 md:right-4 top-4 text-black hover:text-[#4c5fd6] select-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                    <input
                        className='w-full md:w-[700px] h-16 bg-white border border-black hover:border-[#4c5fd6] text-black rounded text-xl p-4 transition-all duration-300'
                        placeholder='Search'
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <button
                    onClick={() => setShowPopup(true)}
                    className='absolute hover:font-light right-5 bottom-5 border border-white rounded-lg bg-zinc-900 hover:bg-[#5c71ff] hover:text-black p-2 px-4 text-lg md:text-2xl flex items-center text-center transition-all duration-300'>
                    Create Card
                </button>
            </div>
            <div className='relative flex flex-col items-center text-center p-10 md:p-20'>
                {error && <p className='absolute top-5 text-red-500 w-full h-20 text-center'>{error}</p>}
                <div className='text-black flex flex-wrap gap-10 md:gap-20 w-full md:px-32 items-center justify-center '>
                    {filteredCards.map(card => (
                        <div key={card._id} className='md:w-[500px] md:h-[200px] border rounded-2xl bg-[#f4f6f8] border-gray-300 text-left'>
                            <h2 className='text-2xl font-bold pt-3 px-6 pb-1 text-[#3e4142]'>{card.title}</h2>
                            <div className='w-full h-px bg-gray-300'></div>
                            <p className='pt-1 px-6 pb-1 text-[#3e4142] text-2xl'>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {showPopup && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-6 rounded shadow-lg'>
                        <h2 className='text-xl font-semibold mb-4 text-black'>Create a New Card</h2>
                        <input
                            className='w-full p-2 border mb-4 rounded'
                            placeholder='Title'
                            value={newCard.title}
                            onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
                        />
                        <textarea
                            className='w-full p-2 border mb-4 rounded'
                            placeholder='Description'
                            value={newCard.description}
                            onChange={(e) => setNewCard({ ...newCard, description: e.target.value })}
                        />
                        <button
                            onClick={handleCreateCard}
                            className='bg-blue-500 hover:bg-blue-800 text-white p-2 rounded transition-all duration-300'>
                            Create
                        </button>
                        <button
                            onClick={() => setShowPopup(false)}
                            className='ml-2 bg-gray-500 hover:bg-gray-800 text-white p-2 rounded transition-all duration-300'>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HelpCenter;
