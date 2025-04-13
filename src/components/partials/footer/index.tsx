import React from 'react'
import cl from 'classnames'
import styles from './Footer.module.scss'
import Image from 'next/image'

interface FooterWidgetProps {
    title: string
    children: React.ReactNode
    className?: string
}

const FooterWidget: React.FC<FooterWidgetProps> = ({ title, children, className }) => (
    <div className={cl(styles['footer-widget'], className)}>
        <h2 className={cl(styles['footer-title'])}>{title}</h2>
        {children}
    </div>
)

interface FooterMenuProps {
    items: { text: string; href: string }[]
}

const FooterMenu: React.FC<FooterMenuProps> = ({ items }) => (
    <ul>
        {items.map((item, index) => (
            <li key={index}>
                <a href={item.href}>{item.text}</a>
            </li>
        ))}
    </ul>
)
const footerMenus = [
    {
        title: 'Dịch Vụ',
        classNames: "col-lg-3 col-md-6",
        items: [
            { text: 'Homestay tại Hà Nội', href: '#' },
            { text: 'Homestay tại Hồ Chí Minh', href: '#' },
            { text: 'Đối tác homestay', href: '#' },
            { text: 'Quản lý lịch homestay', href: '#' }
        ]
    },
    {
        title: 'Chính Sách',
        classNames: "col-lg-3 col-md-6",
        items: [
            { text: 'Điều khoản', href: '/terms-of-service' },
            { text: 'Nội quy chung', href: '/homestay-rules' },
            { text: 'Chính sách bảo mật', href: '/privacy-policy' },
            { text: 'Chính sách hoàn huỷ', href: '/refund-cancellation-policy' }
        ]
    },
    {
        title: 'SenStay',
        classNames: "col-lg-2 col-md-6",
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
        <footer className={styles.footer}>
            <div className={styles['footer-top']} data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className={cl(styles['footer-widget'], styles['footer-about'], styles['footer-contact'])}>
                                <div className={cl(styles['footer-logo'])}>
                                    <Image src="/assets/img/logo/logo.png" alt="logo" width={150} height={50} />
                                </div>
                                <div className={styles['footer-about-content']}>
                                    <p>Nền tảng đặt homestay, căn hộ dịch vụ hàng đầu tại Việt Nam.</p>
                                </div>
                                <div className={styles['footer-contact-info']}>
                                    <div className={styles['footer-address']}>
                                        <Image src="/assets/img/icon/icon-20.svg" alt="Location Icon" className="img-fluid" width={20} height={20} />
                                        <p>95 Kim Mã, Quận Ba Đình, TP Hà Nội</p>
                                    </div>
                                    <div className={styles['footer-address']}>
                                        <Image src="/assets/img/icon/icon-19.svg" alt="Email Icon" className="img-fluid" width={20} height={20} />
                                        <a href="mailto:admin@senstay.vn">admin@senstay.vn</a>
                                    </div>
                                    <div className={styles['footer-address']}>
                                        <Image src="/assets/img/icon/icon-21.svg" alt="Phone Number Icon" className="img-fluid" width={20} height={20} />
                                        <a href="https://zalo.me/3265291769345246104">+84 868 881 442</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {footerMenus.map((menu, index) => (
                            <div className={menu.classNames} key={index}>
                                <FooterWidget title={menu.title} className={styles['footer-menu']}>
                                    <FooterMenu items={menu.items} />
                                </FooterWidget>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles['footer-bottom']}>
                <div className="container">
                    <div className={styles['copyright']}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={styles['privacy-policy']}>
                                    <ul>
                                        <li><a href="#">Sitemaps</a></li>
                                    </ul>
                                    <ul>
                                        {socialIcons.map((icon, index) => (
                                            <li key={index}>
                                                <a rel="noopener noreferrer" target="_blank" href={icon.href}>
                                                    <Image src={icon.iconUrl} alt={icon.href} width={20} height={20} />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles['copyright-text']}>
                                    <p className="mb-0">&copy; 2025 SenStay. All rights reserved.</p>
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