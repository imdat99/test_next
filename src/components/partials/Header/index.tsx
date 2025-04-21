import React from 'react'
import Link from 'next/link'
const Header = () => {
    const districts = [
        {
            id: 1,
            name: 'Hai Bà Trưng',
            value: 'hai-ba-trung'
        },
        {
            id: 2,
            name: 'Cầu Giấy',
            value: 'cau-giay'
        },
        {
            id: 3,
            name: 'Nam Từ Liêm',
            value: 'nam-tu-liem'
        },
        {
            id: 4,
            name: 'Hoàn Kiếm',
            value: 'hoan-kiem'
        },
        
    ]
    return (
        <>
            <header className="header header-page">
                <div className="header-fixed">
                    <nav className="navbar navbar-expand-lg header-nav scroll-sticky">
                        <div className="container-fluid">
                            <div className="navbar-mobile" id="openModalBtn">
                                <div className="mobile_search_box">
                                    <div className="search-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                            style={{ display: 'block', fill: 'none', height: '20px', width: '20px', stroke: '#CB1950', strokeWidth: '4', overflow: 'visible' }}>
                                            <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                                        </svg>
                                    </div>
                                    <div className="text-truncate mr-3" style={{ flex: '1 1 0%', overflow: 'hidden' }}>
                                        <div className="search-ask-label">Bạn muốn đi đâu?</div>
                                        <div className="text-truncate text-muted search-ask-content">
                                            <span>Bất kỳ đâu</span>
                                            <span>•</span>
                                            <span>Ngày bất kỳ</span>
                                            <span>•</span>
                                            <span>2 người lớn</span>
                                        </div>
                                    </div>
                                    <div>
                                        <svg className="mr-2 text-muted" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                            strokeLinejoin="round" name="adjustments-horizontal" style={{ flexShrink: '0', display: 'inline-block', width: '24px', height: '24px', strokeWidth: '1.5' }}>
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <circle cx="14" cy="6" r="2"></circle>
                                            <line x1="4" y1="6" x2="12" y2="6"></line>
                                            <line x1="16" y1="6" x2="20" y2="6"></line>
                                            <circle cx="8" cy="12" r="2"></circle>
                                            <line x1="4" y1="12" x2="6" y2="12"></line>
                                            <line x1="10" y1="12" x2="20" y2="12"></line>
                                            <circle cx="17" cy="18" r="2"></circle>
                                            <line x1="4" y1="18" x2="15" y2="18"></line>
                                            <line x1="19" y1="18" x2="20" y2="18"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-header">
                                <Link href="/" className="navbar-brand logo">
                                    <img src="/assets/img/logo/logo.png?v=0.2" className="img-fluid" alt="Logo" />
                                </Link>
                            </div>
                            <div className="main-menu-wrapper">
                                <div className="menu-header">
                                    <Link href="/" className="menu-logo">
                                        <img src="/assets/img/logo/logo.png?v=0.2" className="img-fluid" alt="Logo" />
                                    </Link>
                                    <a id="menu_close" className="menu-close">
                                        <i className="fas fa-times"></i>
                                    </a>
                                </div>
                                <div className="listing_filter_header">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-item-center justify-content-center header-filter-location">
                                            <div className="d-flex align-items-center header-filter-location-label-container">
                                                <div className="filter_location_label text-muted">Bạn muốn đi đâu?</div>
                                            </div>
                                        </div>
                                        <div className="" style={{ borderLeft: '1px solid rgb(221, 221, 221)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '160px', position: 'relative' }}>
                                            <div className="home_date_filter">
                                                <div className="d-flex align-items-center">
                                                    <div>6 - 7 tháng 11</div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="d-flex align-item-center justify-content-center header-filter-guests">
                                            <div className="d-flex justify-content-center align-items-center header-filter-guests-label-container">
                                                <b className="me-1">2</b><span className="text-muted">người</span>
                                            </div>
                                        </div>
                                        <div className="search-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                                style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '4', overflow: 'visible' }}>
                                                <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="header-filter-location-dropdown d-none">
                                        <div className="header-filter-keyword-search">
                                            <input type="text" placeholder="Tìm kiếm điểm đến, mã phòng..." className="form-control" id="desktop-filter-keyword" />
                                        </div>
                                        <div className="mb-2 header-filter-location-section-label">
                                            Tìm kiếm theo khu vực
                                        </div>
                                        <div className="header-filter-location-section-content">
                                            {districts.map((district) => (
                                                <div className="home_location_dropdown__item" key={district.id}>
                                                    <input type="checkbox" className="home_location_dropdown__item__checkbox" />
                                                    <div>{district.name}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="header-filter-guests-dropdown d-none">
                                        <div className="d-flex justify-content-between header-filter-guests-section-content">
                                            <div>
                                                <b>Người lớn</b>
                                                <div className="text-muted">Lớn hơn 12 tuổi</div>
                                            </div>
                                            <div className="number_picker">
                                                <div className="number_picker__btn">
                                                    <svg width="14" height="2" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.167 1.056l11.67-.049" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                                <div className="number_picker__number">2</div>
                                                <div className="number_picker__btn cp">
                                                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" color="black">
                                                        <path d="M10 4.167v11.666M4.167 10h11.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between header-filter-guests-section-content">
                                            <div>
                                                <b>Trẻ em</b>
                                                <div className="text-muted">Từ 6 đến 12 tuổi</div>
                                            </div>
                                            <div className="number_picker">
                                                <div className="number_picker__btn">
                                                    <svg width="14" height="2" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.167 1.056l11.67-.049" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                                <div className="number_picker__number">0</div>
                                                <div className="number_picker__btn cp">
                                                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" color="black">
                                                        <path d="M10 4.167v11.666M4.167 10h11.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between header-filter-guests-section-content mb-4">
                                            <div>
                                                <b>Trẻ em</b>
                                                <div className="text-muted">Dưới 6 tuổi</div>
                                            </div>
                                            <div className="number_picker">
                                                <div className="number_picker__btn">
                                                    <svg width="14" height="2" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.167 1.056l11.67-.049" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                                <div className="number_picker__number">0</div>
                                                <div className="number_picker__btn cp">
                                                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" color="black">
                                                        <path d="M10 4.167v11.666M4.167 10h11.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav header-navbar-rht">
                                <li className="nav-item user-nav">
                                    <a href="/login" id="login-link">
                                        <span className="user-img">
                                            <img src="/assets/img/user/avatar-default.jpg" alt="Avatar default" id="user-avatar" />
                                            <span className="status online"></span>
                                        </span>
                                    </a>
                                    <a href="/logout" id="logout" className="btn btn-secondary" style={{ display: 'none', backgroundColor: '#ff4667' }}>Đăng xuất</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div id="mobile-filter" className="filter-modal">
                    <div className="filter-modal-content">
                        <div>
                            <button className="filter-close" type="button">
                                <span data-button-content="true" className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation"
                                        focusable="false" style={{
                                            display: 'block',
                                            fill: 'none',
                                            height: '12px',
                                            width: '12px',
                                            stroke: 'currentcolor',
                                            strokeWidth: '4',
                                            overflow: 'visible'
                                        }}>
                                        <path d="m6 6 20 20M26 6 6 26"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="filter-location">
                            <h2>Bạn muốn đi đâu?</h2>

                            <div className="filter-search-container">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation"
                                        focusable="false"
                                        style={{
                                            display: 'block',
                                            fill: 'none',
                                            height: '16px',
                                            width: '16px',
                                            stroke: 'currentcolor',
                                            strokeWidth: '4',
                                            overflow: 'visible'
                                        }}>
                                        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                                    </svg>
                                </span>
                                <input type="text" id="mobile-filter-keyword" placeholder="Tìm kiếm điểm đến, mã phòng..." />
                            </div>

                            <div className="collapsible">
                                <button className="filter-collapsible-trigger">
                                    Chọn theo khu vực
                                    <span className="chevron">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation"
                                            focusable="false"
                                            style={{
                                                display: 'block',
                                                fill: 'none',
                                                height: '16px',
                                                width: '16px',
                                                stroke: 'currentcolor',
                                                strokeWidth: '4',
                                                overflow: 'visible'
                                            }}>
                                            <path fill="none" d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="filter-footer-bar">
                            <div className="filter-footer-content">
                                <button className="btn filter-clear-all" id="mobile-filter-clear">Xóa tất cả</button>
                                <button className="btn filter-search-btn" id="mobile-filter-search">
                                    <div className="filter-search-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                            aria-hidden="true" role="presentation" focusable="false"
                                            style={{
                                                display: 'block',
                                                height: '16px',
                                                width: '16px',
                                                fill: 'currentcolor'
                                            }}>
                                            <path
                                                d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>Tìm kiếm</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header