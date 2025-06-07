import { BackIcon } from "../../assets/svgComponents/index.ts";

export default function BookInfo() {
    return (
        /* 전체 */
        <div className ="px-[20px]">
            {/*상단바*/}    
            <div>
                <BackIcon width={9} height={18}></BackIcon>
                <p className="flex items-center justify-center title-regular-14">
                    책 정보</p>
            </div>

            {/* 책표지, 제목, 저자 */}
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
            {/* 책소개 */}
            <div>
                <div>
                    <p>책소개</p>
                </div>

            </div>
            {/* 책정보 */}
            <div></div> 
            {/* 책평점 */}
            <div></div>

        </div>
    )
}