import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/718cee8583c6b50ef0930db16808b1f8.jpeg?lk3s=a5d48078&nonce=2157&refresh_token=c0f347d6de0d8ff59b7c598eabeadea1&x-expires=1722686400&x-signature=adqRgs6%2BQsj46btis0OKGbTO0A0%3D&shp=a5d48078&shcp=81f88b70" alt="Hoa"/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                   <span>Vuong Dinh Cuong</span>
                   <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>huevuong67</span>
            </div>
        </div>
     );
}

export default AccountItem;