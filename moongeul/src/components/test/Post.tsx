import { Optionicon } from '../../assets/svgComponents/index.ts'
import { HeartIcon } from '../../assets/svgComponents/index.ts'
import { ChatIcon } from '../../assets/svgComponents/index.ts'
import { RepeatIcon } from '../../assets/svgComponents/index.ts'
export default function Post() {
    return (
        // 전체
        <div className=" border px-[20px] py-[16px]"> 

            {/* 2개 중 첫번째*/}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-[4px]">                    
                    <img src={"/profile-img.png"} width={40} height={40}></img>
                    <div className="flex gap-x-[4px]">
                        <p className="title-medium-14">유리미</p>
                        <p className="text-dark-gray">|</p>
                        <p className="title-regular-14 text-dark-gray">감상평</p>
                    </div>
                </div>
                <Optionicon></Optionicon>
            </div>

            <div className="flex flex-col pl-[40px]">
                
            {/*2번째 3박스 중 1번-책사진,제목,저지지*/}
            <div className="flex border border-light-gray rounded rounded-[12px] p-[8px] gap-x-[8px] items-center">
                {/* 책사진 */}
                <img src={"/book-img.png"} width={37.33334} height={56}></img>

                {/* 책제목, 저자 */}
                    <div>
                        <p className="title-medium-14 text-black">블랙 쇼맨과 이름없는 마을의 살인</p>
                        <p className="caption-1 text-dark-gray">히가시노 게이고</p>
                    </div>
            </div>

            {/*2번째 3박스 중 2번-글*/}
            <div>


            </div>
            {/*2번째 3박스 중 3번-밑 아이콘*/}
                <div className="flex gap-x-[40px] items-center">
                    <div className="flex gap-x-[4px]">
                        <HeartIcon width={24} height={24}></HeartIcon>
                        <p className="text-dark-gray ">5</p>
                    </div>
                    <div className="flex gap-x-[4px]">
                    <ChatIcon width={24} height={24}></ChatIcon>
                    <p className="text-dark-gray">5</p>
                    </div>
                    <div className="flex gap-x-[4px]">
                    <RepeatIcon width={24} height={24}></RepeatIcon>   
                    <p className="text-dark-gray">5</p>
                    </div>
                </div>
            </div>

            </div>

        
    )
}