import React from 'react'
import classNames from 'classnames'

interface FooterWidgetProps {
    title: string
    children: React.ReactNode
    className?: string
}

const FooterWidget: React.FC<FooterWidgetProps> = ({ title, children, className }) => (
    <div className={classNames("mb-8", className)}>
        <h2 className="text-[#0a142f] text-lg font-bold mb-6 capitalize font-lexend">{title}</h2>
        {children}
    </div>
)

interface FooterMenuProps {
    items: { text: string; href: string }[]
}

const FooterMenu: React.FC<FooterMenuProps> = ({ items }) => (
    <ul className="list-none m-0 p-0 outline-none">
        {items.map((item, index) => (
            <li key={index} className="mb-5 relative last:mb-0">
                <a href={item.href} className="text-black transition-all duration-400 hover:text-[#CB1950]">
                    {item.text}
                </a>
            </li>
        ))}
    </ul>
)

const footerMenus = [
    {
        title: 'Dịch Vụ',
        classNames: "lg:w-1/4 md:w-1/2 w-full",
        items: [
            { text: 'Homestay tại Hà Nội', href: '#' },
            { text: 'Homestay tại Hồ Chí Minh', href: '#' },
            { text: 'Đối tác homestay', href: '#' },
            { text: 'Quản lý lịch homestay', href: '#' }
        ]
    },
    {
        title: 'Chính Sách',
        classNames: "lg:w-1/4 md:w-1/2 w-full",
        items: [
            { text: 'Điều khoản', href: '/terms-of-service' },
            { text: 'Nội quy chung', href: '/homestay-rules' },
            { text: 'Chính sách bảo mật', href: '/privacy-policy' },
            { text: 'Chính sách hoàn huỷ', href: '/refund-cancellation-policy' }
        ]
    },
    {
        title: 'SenStay',
        classNames: "lg:w-1/6 md:w-1/2 w-full",
        items: [
            { text: 'Blogs', href: '/blogs' },
            { text: 'Liên hệ', href: '/contact-us' },
            { text: 'Câu chuyện chúng tôi', href: '#' },
            { text: 'Giới thiệu về SenStay', href: '#' }
        ]
    }
]

const socialIcons = [
    {
        href: 'https://www.facebook.com/senstay.vn',
        iconUrl: '/assets/img/icon/facebook.svg'
    },
    {
        href: 'https://www.tiktok.com/@senstay.vn',
        iconUrl: '/assets/img/icon/tiktok.svg'
    },
    {
        href: 'https://www.instagram.com/senstay.homestay',
        iconUrl: '/assets/img/icon/instagram.svg'
    },
    {
        href: 'https://zalo.me/3265291769345246104',
        iconUrl: '/assets/img/icon/zalo.svg'
    }
]

const Footer = () => {
    return (
        <footer className="bg-[#f7f7f7] relative px-2.5">
            <div className="pt-15 relative z-10 text-[0.95rem]" data-aos="fade-up">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-3">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-3">
                            <div className="lg:mb-0 mb-8 *:font-inter">
                                <div className="mb-4">
                                    <img src="/assets/img/logo/logo.png?v=0.2" alt="logo" className="h-10 max-w-full" />
                                </div>
                                <div className="max-w-[315px]">
                                    <p className="text-black">Nền tảng đặt homestay, căn hộ dịch vụ hàng đầu tại Việt Nam.</p>
                                </div>
                                <div className="text-[#26292c] mt-5 [&_img]:h-5 [&_img]:mr-3">
                                    <div className="flex items-center mb-5">
                                        <img src="/assets/img/icon/icon-20.svg" alt="Location Icon" />
                                        <p className="mb-0">95 Kim Mã, Quận Ba Đình, TP Hà Nội</p>
                                    </div>
                                    <div className="flex items-center mb-5">
                                        <img src="/assets/img/icon/icon-19.svg" alt="Email Icon" />
                                        <a href="mailto:admin@senstay.vn">admin@senstay.vn</a>
                                    </div>
                                    <div className="flex items-center">
                                        <img src="/assets/img/icon/icon-21.svg" alt="Phone Number Icon" />
                                        <a href="https://zalo.me/3265291769345246104">+84 868 881 442</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {footerMenus.map((menu, index) => (
                            <div className={menu.classNames + " px-3"} key={index}>
                                <FooterWidget title={menu.title}>
                                    <FooterMenu items={menu.items} />
                                </FooterWidget>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative z-10 text-[0.95rem]">
                <div className="container mx-auto px-4">
                    <div className="py-10">
                        <div className="flex flex-wrap">
                            <div className="md:w-1/2 w-full">
                                <div className="flex items-center">
                                    <ul className="flex items-center list-none p-0 m-0 mr-2.5">
                                        <li className="px-1.5 first:pl-0">
                                            <a href="#" className="text-black font-inter hover:text-[#CB1950]">Sitemaps</a>
                                        </li>
                                    </ul>
                                    <ul className="flex items-center list-none p-0 m-0">
                                        {socialIcons.map((icon, index) => (
                                            <li key={index} className="px-1.5">
                                                <a rel="noopener noreferrer" target="_blank" href={icon.href}>
                                                    <img src={icon.iconUrl} alt={icon.href} className="h-[18px]" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full">
                                <div className="text-right">
                                    <p className="mb-0 text-black font-inter">&copy; 2025 SenStay. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer