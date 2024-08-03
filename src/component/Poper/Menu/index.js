import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/component/Poper'
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';


const cx = classNames.bind(styles)

const defaultFn = () => {}

  
function Menu({ children, items = [], hideOnClick = false, onChange=defaultFn }) {

    const [history, setHistory] = useState([{ data: items }]) // { data: items } đại diện cho dữ liệu trang hiện tại
    const current = history[history.length - 1]     // luôn render ra phần tử cuối

    const renderItems = () => {
        return current.data.map((item, index) => { 
            const isParent = item.chidlren

            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory(prev => [...prev, item.chidlren]) // push mảng mới(children) vào useState
                }else {
                    onChange(item)               }
            }}/>
        })
    }

    return ( 
        <Tippy 
        // visible
        interactive = {true}
        delay={[0, 200]}
        placement='bottom' 
        hideOnClick = {hideOnClick}
        render={attrs => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-poper')}>
                    {history.length > 1 && <Header title={'language'}  onBack={() => {  
                        setHistory(prev => prev.slice(0, prev.length -1))   // mỗi khi click => xóa phần từ cuối 
                    }}/>}
                    {renderItems()}
                </PopperWrapper>
            </div>
        )}
        onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
     );
}

export default Menu;