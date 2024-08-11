import config from '~/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {    faCircleQuestion, 
            faCloudUpload, 
            faCoins, 
            faEarthAsia, 
            faEllipsisVertical, 
            faGear, faKeyboard, 
            faPersonCircleCheck, 
            faSignOut,
            faMessage   } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css'; 
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/component/Button';
import Menu from '~/component/Poper/Menu/Menu';
import Image from '~/component/Image';
import Search from '../Search/Search';

const cx = classNames.bind(styles)

const currentUser = true

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',   
        chidlren : {
            title: 'Language',  
            data: [
            {           
                type: 'language', 
                code: 'en', 
                title: 'English'
            },
            {              
                type: 'language',   
                code: 'vi',
                title: 'Tiếng Việt'
            },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feeback and help',
        to: '/feeback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
]



function Header() {


    //handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }

    const userMenu = [
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faPersonCircleCheck} />,
            title: 'View Profile',
            to: '/@hao'
        },        
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin'
        },        
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting'
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feeback and help',
            to: '/feeback'
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        }
    ]

    return (
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt='TikTok'/>
                </Link>

            {/* search */}
            <Search/>

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy content="Upload video" placement='bottom' delay={[0, 200]}>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
                        </Tippy>
                        <button className={cx('action-btn')}>
                            <FontAwesomeIcon icon={faMessage} />
                        </button>
                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary >Log in</Button>
                    </>
                )}
                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Image 
                                src='https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/435683103_1111774246816176_1565537745690258604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=3XU3LP7zN5EQ7kNvgFQkRo2&_nc_ht=scontent.fdad3-4.fna&oh=00_AYCtlH2Pef9wPGtv-fiaZEJm0hoSpuyLFPenkjJLaFZWyA&oe=66BE0BB3'
                                className={cx('user-avatar')} 
                                alt='lisa'  />
                            ) : (

                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </button>
                            )}
                        </Menu>
            </div>
        </div>
    </header>
    )
}

export default Header;