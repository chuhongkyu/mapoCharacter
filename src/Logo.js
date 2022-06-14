import * as React from "react";
import {motion} from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Svg = styled.svg `
    width: 758px;
    height: 238px;
`

const opening = {
    start: {
        fill:"rgba(255, 255, 255, 0)",
        pathLength:0,
    },
    end: {
        fill: "rgba(255, 255, 255, 0.2)",
        pathLength:1,
        transition: {duration: 5},
    },
    exit: {
        fill: "rgba(255, 255, 255, 0)",
    }
};

const Logo = () => {
    return (
        <Wrapper>
            <Svg
                width="758"
                height="238"
                xmlns="http://www.w3.org/2000/svg"
                >
                <defs>
                    <clipPath id="clip0">
                        <rect x="-1" y="259" width="758" height="238"></rect>
                    </clipPath>
                </defs>
                <g clip-path="url(#clip0)" transform="translate(1 -259)">
                    <motion.path
                        variants={opening}
                        initial="start"
                        animate="end"
                        d="M445.71 439.175C496.532 439.175 537.889 398.992 537.889 349.577 537.889 300.163 496.532 260 445.71 260 422.099 260 399.674 268.744 382.563 284.601 376.804 289.937 376.465 298.914 381.801 304.672 387.137 310.41 396.116 310.748 401.855 305.434 413.692 294.446 429.256 288.412 445.689 288.412 480.841 288.412 509.449 315.872 509.449 349.598 509.449 383.346 480.841 410.806 445.689 410.806L444.566 410.806 444.566 342.231C444.566 334.397 438.214 328.046 430.379 328.046 422.544 328.046 416.17 334.397 416.17 342.231L416.17 469.028 399.928 469.028 337.395 336.176C335.045 331.2 330.047 328.024 324.542 328.024 319.036 328.024 314.038 331.2 311.709 336.176L249.155 469.028 232.956 469.028 232.956 342.209C232.956 335.9 228.805 330.353 222.749 328.575 216.693 326.818 210.192 329.252 206.804 334.567L146.537 429.034 86.2705 334.567C82.9035 329.252 76.3814 326.818 70.3251 328.575 64.2689 330.353 60.0971 335.9 60.0971 342.209L60.0971 469.049 0 469.049 0 496 75.4285 496C82.8612 496 88.8964 489.966 88.8964 482.535L88.9176 391.539 134.573 463.078C137.177 467.164 141.688 469.641 146.537 469.641 151.408 469.641 155.918 467.164 158.523 463.078L204.178 391.518 204.178 482.535C204.178 489.987 210.213 496 217.646 496L258.854 496C264.36 496 269.357 492.824 271.708 487.87L324.584 375.576 377.46 487.87C379.811 492.846 384.808 496 390.314 496L600.908 496C607.642 496 613.444 492.697 614.799 486.134 616.176 479.55 612.745 472.902 606.583 470.234 583.798 460.284 569.059 437.82 569.081 412.965 569.081 378.54 597.075 350.53 631.528 350.53 665.96 350.53 693.976 378.54 693.976 412.965 693.976 437.799 679.238 460.284 656.452 470.234 650.29 472.923 646.86 479.55 648.236 486.134 649.612 492.719 655.415 496 662.149 496L756 496 756 469.028 702.997 469.028C715.3 453.339 722.373 433.713 722.373 412.944 722.373 362.852 681.609 322.118 631.528 322.118 581.426 322.118 540.684 362.873 540.684 412.944 540.684 433.713 547.735 453.339 560.06 469.028L444.63 469.028 444.63 439.175 445.71 439.175Z"
                        stroke="white"
                        strokeWidth="3"></motion.path>
                </g>
            </Svg>
        </Wrapper>
    )

}

export default Logo;