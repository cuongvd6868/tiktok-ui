
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {    faCircleQuestion, 
            faCloudUpload, 
            faCoins, 
            faEarthAsia, 
            faEllipsisVertical, 
            faGear, faKeyboard, 
            faPersonCircleCheck, 
            faSignOut,
            faMessage} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css'; 
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/component/Button';
import Menu from '~/component/Poper/Menu';
import Image from '~/component/Image';
import Search from '../Search';

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
        ...MENU_ITEMS,
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
                <img src={images.logo} alt='TikTok'/>

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
                                src='https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/718cee8583c6b50ef0930db16808b1f8.jpeg?lk3s=a5d48078&nonce=2157&refresh_token=c0f347d6de0d8ff59b7c598eabeadea1&x-expires=1722686400&x-signature=adqRgs6%2BQsj46btis0OKGbTO0A0%3D&shp=a5d48078&shcp=81f88b70'
                                className={cx('user-avatar')} 
                                alt='lisa'/>
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