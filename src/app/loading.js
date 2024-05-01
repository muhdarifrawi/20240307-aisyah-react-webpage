import commonStyles from "./css/common.module.css";

export default function Loading(){
    
    return (
        <section className={commonStyles.loadingScreen}>
            <div>
                <p className={commonStyles.loadingText}>Loading ...</p>
                <div id="jumpingDots">
                    <span class="dots"></span>
                </div>
            </div>
        </section>
    )
}