'use client';
import { useState } from "react";
import commonStyles from "./css/common.module.css";

export default function imageNavbar(data) {
    console.log("imageNavber data: ", data["data"][0]);
    const [count, setCount] = useState(1);

    function handleIncrease() {
        setCount(count + 1);
    }

    function handleDecrease() {
        setCount(count - 1);
    }

    let imgPath = `../.` + data["data"][0]["projectPictures"][count];
    // if (data["data"][0]["projectPictures"][0]) {
    //     imgPath = `../.` + data["data"][0]["projectPictures"][0]
    // }
    return (<>
        <div className={commonStyles.imageContainer}>
            <img className={commonStyles.projectImages}
                src={imgPath} />
        </div>
        <div className={commonStyles.imageNav}>
            <button className={commonStyles.imageNavBtn} onClick={handleDecrease}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                </svg>
            </button>
            <span id="imgNumber">{count}</span>
            <button className={commonStyles.imageNavBtn} onClick={handleIncrease}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
            </button>
        </div>
    </>
    )
}