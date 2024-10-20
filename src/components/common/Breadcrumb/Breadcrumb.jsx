import Link from "next/link"
import style from './Breadcrumb.module.css'
import Image from "next/image"

export const Breadcrumb = () => {
    const data = [
        {
            name: "Dịch vụ",
            link: "/services",
        },
        {
            name: "Massage tình nhân",
            link: "#!",
        }
    ]

  return (
    <div className="w-full flex flex-wrap gap-[6px]">
        <div className={style.linkItem}>
            <Link href={'/'}>
                <Image
                    src={'/assets/icons/ic_home.svg'}
                    width={16}
                    height={16}
                    alt={'Home icon'}
                />  
            </Link>
        </div>
        {
            data.map((item, index) => (
                <div key={index} className={style.linkItem}>
                    <Link href={item.link
                    }>
                        {item.name}
                    </Link>
                </div>
            ))
        }
    </div>
  )
}
