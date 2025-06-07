import { BackIcon } from "../../assets/svgComponents/index.ts";
import { MoreIcon } from "../../assets/svgComponents/index.ts";
import { Star0Icon } from "../../assets/svgComponents/index.ts";
import { Star1Icon } from "../../assets/svgComponents/index.ts";
import { Optionicon } from "../../assets/svgComponents/index.ts";

export default function BookInfo() {
    return (
        /* 전체 */
        <div className ="flex flex-col background-color px-[20px]">
            {/*상단바*/}    
            <div className="flex items-center">
                <BackIcon width={9} height={18}></BackIcon>
                <p className="flex items-center justify-center title-regular-14 text-dark">
                    책 정보</p>
            </div>

            {/* 책표지, 제목, 저자 */}
            <div className="flex items-center gap-x-[8px] py-[16px] px-[8px] ">
                <img src={"/memory-img.png"} width={94} height={140} className="mx-[8px]"></img>
                <div className="py-[16px]">
                    <p className="title-medium-16 text-dark">나미야 잡화점의 기억</p>
                    <div className="pt-[20px]">
                        <p className="caption-1 text-dark-gray">히가시노 게이고</p>
                        <p className="caption-1 text-dark-gray">현대문학</p>
                        <p className="caption-1 text-dark-gray">2012</p>
                    </div>
                </div>
            </div>
            
            {/* 책소개 */}
            <div>
                <div className="flex items-center justify-between py-[12px]">
                    <p>책소개</p>
                    <div className="flex">
                        <p className="body-regular-14 text-dark-gray">더보기</p>
                        <MoreIcon width={5} height={10} className="m-[8px]"></MoreIcon>
                    </div>
                </div>
                <div>
                    <p>히가시노 게이고의 가장 경이로운 대표작 『나미야 잡화점의 기
                        적』이 국내 출간 10주년을 맞아 무선 보급판으로 발간된다. 위로
                        와 공감을 얻을 수 있는 따뜻한 공간을 그린 초판 표지의 감동을 
                        그대로 담아낸 무선판은 다소 ··· </p>
                </div>
            </div>

            {/* 책평점 */}
            <div className="pt-[12px] pb-[16px]">
                <div className="flex items-center justify-between py-[12px]">
                    <p>책 평점</p>
                    <Optionicon></Optionicon>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <Star1Icon width={32} height={32}></Star1Icon>
                        <Star1Icon width={32} height={32}></Star1Icon>
                        <Star1Icon width={32} height={32}></Star1Icon>
                        <Star1Icon width={32} height={32}></Star1Icon>
                        <Star0Icon width={32} height={32}></Star0Icon>
                    </div>
                    <div>
                        <p className="px-[12px]">4.0</p>
                    </div>
                </div>
            </div>
            
            {/* 책 태그 */}
            <div>
                <div className="flex items-center justify-between py-[8px]">
                    <p className="text-dark">책 태그</p>
                    <Optionicon></Optionicon>
                </div>
                <div className="flex text-dark-gray gap-x-[4px] mt-[4px] mb-[16px]">
                        <p className="border rounded rounded-[16px] bg-color-white px-[10px]">#따뜻함</p>
                        <p className="border rounded rounded-[16px] bg-color-white px-[10px]">#사랑</p>
                        <p className="border rounded rounded-[16px] bg-color-white px-[10px]">#가족</p>
                        <p className="border rounded rounded-[16px] bg-color-white px-[10px]">#감사</p>
                        <p className="border rounded rounded-[16px] bg-color-white px-[10px]">#슬픔</p>
                    
                </div>
            </div>

            {/* 리뷰 */}
            <div>
                <div className="flex items-center justify-between py-[12px]" >
                    <p className="title-medium-16 text-dark">리뷰</p>
                    <div className="flex">
                        <p className="body-regular-14 text-dark-gray">더보기</p>
                        <MoreIcon width={5} height={10} className="m-[8px]"></MoreIcon>
                    </div>
                </div>
                <div className="flex flex-col border border-light-gray rounded rounded-[16px] px-[12px] py-[8px]">
                        <div className="flex gap-x-[4px] items-center mb-[4px]">
                            <img src={"/profile-img.png"} width={40} height={40}></img>
                                <p className="title-medium-14">Lustria</p>
                                <p className="text-dark-gray">|</p>
                                <p className="title-regular-14 text-dark-gray">감상평</p>
                        </div>
                        <div className="flex items-center">
                            <p>블랙쇼맨과 이름없는 마을의 살인"은 일본의 유명 작가 
                                히가시노 게이고의 미스터리 소설입니다. 히가시노 게이
                                고는 그의 복잡하고 정교한 플롯과 인간 심리에 대한 ...
                            </p>
                        </div>
                </div>
            </div>
        </div>
    )
    }