import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dfa709ae985f7de7723c66ff6284bb64.jpeg?lk3s=a5d48078&nonce=95165&refresh_token=feeca4e478dbd8f62db87c31b42d1625&x-expires=1719410400&x-signature=4KukQGzA%2FXAuqY1pRx1GjrzJHls%3D&shp=a5d48078&shcp=81f88b70" alt="Hoa"/>
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