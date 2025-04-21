import React from 'react'
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
            <header className="w-full">
                <div className="fixed w-full bg-white shadow-md z-50">
                    <nav className="relative">
                        <div className="container mx-auto px-4">
                            {/* Mobile Search Button */}
                            <div className="lg:hidden flex items-center p-4" id="openModalBtn">
                                <div className="flex items-center w-full rounded-full border border-gray-300 p-2 shadow-sm">
                                    <div className="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                            className="block w-5 h-5 stroke-pink-600 stroke-2 overflow-visible fill-none">
                                            <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                                        </svg>
                                    </div>
                                    <div className="truncate mr-3 flex-1 overflow-hidden">
                                        <div className="text-sm font-medium">Bạn muốn đi đâu?</div>
                                        <div className="truncate text-gray-500 text-xs">
                                            <span>Bất kỳ đâu</span>
                                            <span>•</span>
                                            <span>Ngày bất kỳ</span>
                                            <span>•</span>
                                            <span>2 người lớn</span>
                                        </div>
                                    </div>
                                    <div>
                                        <svg className="mr-2 text-gray-500 inline-block w-6 h-6 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round"
                                            strokeLinejoin="round" name="adjustments-horizontal">
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

                            <div className="flex items-center justify-between py-4">
                                {/* Logo */}
                                <div className="navbar-header">
                                    <a href="/" className="flex items-center">
                                        <img src="/assets/img/logo/logo.png?v=0.2" className="max-w-full h-auto" alt="Logo" />
                                    </a>
                                </div>

                                {/* Main Menu - Desktop */}
                                <div className="hidden lg:block flex-1 px-4">
                                    <div className="lg:hidden">
                                        <a href="/" className="flex items-center">
                                            <img src="/assets/img/logo/logo.png?v=0.2" className="max-w-full h-auto" alt="Logo" />
                                        </a>
                                        <button id="menu_close" className="text-gray-600">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>

                                    {/* Desktop Search Bar */}
                                    <div className="flex items-center justify-center rounded-full border border-gray-300 shadow-sm">
                                        {/* Location Filter */}
                                        <div className="flex items-center justify-center p-3 relative">
                                            <div className="flex items-center">
                                                <div className="text-gray-500">Bạn muốn đi đâu?</div>
                                            </div>
                                        </div>

                                        {/* Date Filter */}
                                        <div className="flex items-center justify-center w-40 relative border-l border-gray-200">
                                            <div className="p-3">
                                                <div className="flex items-center">
                                                    <div>6 - 7 tháng 11</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Guests Filter */}
                                        <div className="flex items-center justify-center p-3">
                                            <div className="flex items-center justify-center">
                                                <b className="mr-1">2</b><span className="text-gray-500">người</span>
                                            </div>
                                        </div>

                                        {/* Search Button */}
                                        <div className="p-3 bg-pink-600 rounded-full mx-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                                                className="block w-4 h-4 stroke-white stroke-2 overflow-visible fill-none">
                                                <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Location Dropdown - Initially Hidden */}
                                    <div className="hidden absolute mt-2 bg-white p-4 rounded-xl shadow-lg z-10 w-96">
                                        <div className="mb-4">
                                            <input type="text" placeholder="Tìm kiếm điểm đến, mã phòng..." className="w-full p-2 border border-gray-300 rounded-md" id="desktop-filter-keyword" />
                                        </div>
                                        <div className="mb-2 font-medium">
                                            Tìm kiếm theo khu vực
                                        </div>
                                        <div className="space-y-2">
                                            {districts.map((district) => (
                                                <div className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer" key={district.id}>
                                                    <input type="checkbox" className="mr-2" />
                                                    <div>{district.name}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Guests Dropdown - Initially Hidden */}
                                    <div className="hidden absolute mt-2 bg-white p-4 rounded-xl shadow-lg z-10 w-80">
                                        {/* Adults */}
                                        <div className="flex justify-between items-center mb-4">
                                            <div>
                                                <div className="font-bold">Người lớn</div>
                                                <div className="text-gray-500 text-sm">Lớn hơn 12 tuổi</div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400">
                                                    <svg width="14" height="2" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.167 1.056l11.67-.049" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </button>
                                                <div className="text-lg">2</div>
                                                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 cursor-pointer">
                                                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" color="black">
                                                        <path d="M10 4.167v11.666M4.167 10h11.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Children 6-12 */}
                                        <div className="flex justify-between items-center mb-4">
                                            <div>
                                                <div className="font-bold">Trẻ em</div>
                                                <div className="text-gray-500 text-sm">Từ 6 đến 12 tuổi</div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400">
                                                    <svg width="14" height="2" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.167 1.056l11.67-.049" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </button>
                                                <div className="text-lg">0</div>
                                                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 cursor-pointer">
                                                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" color="black">
                                                        <path d="M10 4.167v11.666M4.167 10h11.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Children under 6 */}
                                        <div className="flex justify-between items-center mb-4">
                                            <div>
                                                <div className="font-bold">Trẻ em</div>
                                                <div className="text-gray-500 text-sm">Dưới 6 tuổi</div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400">
                                                    <svg width="14" height="2" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.167 1.056l11.67-.049" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </button>
                                                <div className="text-lg">0</div>
                                                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 cursor-pointer">
                                                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" color="black">
                                                        <path d="M10 4.167v11.666M4.167 10h11.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* User Navigation */}
                                <div className="flex items-center">
                                    <div className="relative">
                                        <a href="/login" id="login-link" className="flex items-center">
                                            <span className="relative inline-block">
                                                <img src="/assets/img/user/avatar-default.jpg" alt="Avatar default" id="user-avatar" className="w-10 h-10 rounded-full" />
                                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                                            </span>
                                        </a>
                                        <a href="/logout" id="logout" className="hidden px-4 py-2 bg-pink-500 text-white rounded-md">Đăng xuất</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Mobile Filter Modal */}
                <div id="mobile-filter" className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 hidden">
                    <div className="bg-white h-full w-full md:w-2/3 md:max-w-md absolute right-0">
                        <div className="p-4">
                            <div>
                                <button className="p-2 rounded-full hover:bg-gray-100" type="button">
                                    <span data-button-content="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation"
                                            focusable="false" className="block w-3 h-3 stroke-current stroke-2 overflow-visible fill-none">
                                            <path d="m6 6 20 20M26 6 6 26"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            <div className="mt-4">
                                <h2 className="text-xl font-semibold mb-4">Bạn muốn đi đâu?</h2>

                                <div className="flex items-center border border-gray-300 rounded-lg p-2 mb-4">
                                    <span className="mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation"
                                            focusable="false" className="block w-4 h-4 stroke-current stroke-2 overflow-visible fill-none">
                                            <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                                        </svg>
                                    </span>
                                    <input type="text" id="mobile-filter-keyword" placeholder="Tìm kiếm điểm đến, mã phòng..." className="w-full outline-none" />
                                </div>

                                <div className="border-t border-gray-200 py-4">
                                    <button className="flex items-center justify-between w-full py-2">
                                        <span>Chọn theo khu vực</span>
                                        <span className="chevron">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation"
                                                focusable="false" className="block w-4 h-4 stroke-current stroke-2 overflow-visible fill-none">
                                                <path fill="none" d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-4 bg-white">
                            <div className="flex justify-between">
                                <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg" id="mobile-filter-clear">Xóa tất cả</button>
                                <button className="px-4 py-2 bg-pink-600 text-white rounded-lg flex items-center" id="mobile-filter-search">
                                    <div className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                            aria-hidden="true" role="presentation" focusable="false"
                                            className="block w-4 h-4 fill-current">
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