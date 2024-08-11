import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountPreview.scss"
import Button from "~/component/Button"


const cx = classNames.bind(styles);

function AccountPreview() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')}
                 src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/450430124_1165154678144799_5602218281050766536_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=v_Wfcm2REagQ7kNvgGdN7vG&_nc_ht=scontent.fdad3-1.fna&oh=00_AYASbpn2EVD_OBp9LQsytsELmxSkJMBlof65J-Zuhe9PMw&oe=66BD4426"
                 alt="ava_pre"
                />
                <Button primary className={cx('follow-btn')}>Follow</Button>
            </div>
            
            <div className={cx('body')}>
            <p className={cx('nickname')}>
                <strong>saigonspringroll</strong>
                <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>
            </p>
            <p className={cx('name')}>Tri Phan</p>
            <p className={cx('analytics')}>
                <span className={cx('followers')}><strong>2.4M</strong>Followers</span>
                <span className={cx('likes')}><strong>33.6M</strong>Likes</span>
            </p>
            </div>
        </div>
     );
}

export default AccountPreview;