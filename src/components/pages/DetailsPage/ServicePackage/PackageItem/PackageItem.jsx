import { Button } from "@/components/ui/button"
import Image from 'next/image'

export const PackageItem = () => {
  return (
    <div className="w-full bg-white rounded-lg border-t-4 border-primary">
        <div className="w-full p-[32px]">
            <div className="w-full border-b border-gray-2">
                <p className="text-center text-xl font-bold text-gray text-noto">
                Gói cặp đôi <br />
                (Thắp lửa yêu thương)
                </p>
                <ul className="list-disc list-inside mt-[8px]">
                    <li>
                        Thời gian: 2 giờ 30 phút
                    </li>
                    <li>
                        Thưởng thức rượu vang & ăn nhẹ khi kết thúc liệu trình
                    </li>
                </ul>
                <Button className="w-full mt-[32px]">
                    Đặt lịch ngay
                </Button>
            </div>
            
            <div className="w-full flex flex-col gap-[16px] mt-[32px]">
                <div className="flex w-full gap-[12px]">
                    <Image 
                        src={'/assets/icons/ic_check.svg'}
                        width={24}
                        height={24}
                        className="shrink-0"
                        alt={'Check icon'}
                    /> 
                    <p className="text-md text-gray">
                        Xông hơi, ngâm bồn jacuzzi với tinh dầu & muối thảo dược (40 phút)
                    </p>
                </div>
                <div className="flex w-full gap-[12px]">
                    <Image 
                        src={'/assets/icons/ic_check.svg'}
                        width={24}
                        height={24}
                        className="shrink-0"
                        alt={'Check icon'}
                    /> 
                    <p className="text-md text-gray">
                    Xông chân bằng đá muối Himalaya + thưởng thức trà gừng.
                    </p>
                </div>
                <div className="flex w-full gap-[12px]">
                    <Image 
                        src={'/assets/icons/ic_check.svg'}
                        width={24}
                        height={24}
                        className="shrink-0"
                        alt={'Check icon'}
                    /> 
                    <p className="text-md text-gray">
                    Massage body kết hợp ánh huyết 
                    (70 phút)
                    </p>
                </div>
                <div className="flex w-full items-start gap-[12px]">
                    <Image 
                        src={'/assets/icons/ic_check.svg'}
                        width={24}
                        height={24}
                        className="shrink-0"
                        alt={'Check icon'}
                    /> 
                    <p className="text-md text-gray">
                    Tẩy tế bào chết toàn thân hoặc chăm sóc da mặt (50 phút)
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
