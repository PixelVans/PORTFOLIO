"use client"

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();

    return (
        <div className={containerStyles}>
            <button
                onClick={() => swiper?.slidePrev()} // Add optional chaining to avoid errors if swiper is null
                className={btnStyles}>
                <PiCaretLeftBold className={iconStyles} />
            </button>
            <button
                onClick={() => swiper?.slideNext()} // Add optional chaining to avoid errors if swiper is null
                className={btnStyles}>
                <PiCaretRightBold className={iconStyles} />
            </button>
        </div>
    );
};

export default WorkSliderBtns;
