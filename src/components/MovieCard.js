import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import VideoTrailer from './VideoTrailer';

const MovieCard = ({ movie }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    if (!movie?.poster_path) return null;
    return (
        <>
            {/* <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Toggle modal
            </button> */}
            <div onClick={openModal} data-modal-target="popup-modal" data-modal-toggle="popup-modal" className='w-32 md:w-40 cursor-pointer'>
                <img src={IMG_CDN_URL + movie?.poster_path} alt={movie?.original_title} />
            </div>
            {
                modalOpen &&
                <>
                    <div id="popup-modal" className="rounded-md pt-10 bg-gradient-to-b from-black to-[#000000cf] h-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full">
                        <div className="relative p-4 w-full max-h-full">
                            <button onClick={closeModal} type="button" className="absolute top-6 right-5 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-0 text-center md:p-2 flex flex-col md:flex-row md:justify-between md:items-start bg-slate-800">
                                <div className='flex-[50%] md:flex-[60%]'>
                                    <VideoTrailer movieId={movie?.id} />
                                </div>
                                <div className='bg-slate-800 text-white flex-[50%] md:flex-[40%] max-h-max md:h-full flex flex-col gap-2 pt-2 md:px-4 md:mt-6'>
                                    <h1 className='font-normal text-lg md:font-semibold md:text-3xl'>{movie?.title || movie?.original_title}</h1>
                                    <div className='flex justify-center gap-3'>
                                        <p>
                                            🔥{movie?.popularity}
                                        </p>
                                        <p>
                                            Rating: {movie?.vote_average.toFixed(2)} / 10
                                        </p>
                                    </div>
                                    <div>
                                        Released on : {movie?.release_date}
                                    </div>
                                    <div className='pb-4 px-2 text-sm md:pb-2'>{movie?.overview}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default MovieCard