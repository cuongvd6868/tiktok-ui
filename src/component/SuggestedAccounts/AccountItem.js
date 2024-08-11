import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../Poper';
import AccountPreview from "./AccountPreview"

import styles from "./SuggestedAccounts.module.scss"

const cx = classNames.bind(styles)


function AccountItem() {

    const renderPreview = (props) => {
        return(
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
            </div>
        )
    }

    return ( 
        <div>
            <Tippy interactive delay={[800, 0]} placement='bottom' render={renderPreview}>
                <div className={cx('account-item')}>
                    <img 
                        src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/450430124_1165154678144799_5602218281050766536_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=v_Wfcm2REagQ7kNvgGdN7vG&_nc_ht=scontent.fdad3-1.fna&oh=00_AYASbpn2EVD_OBp9LQsytsELmxSkJMBlof65J-Zuhe9PMw&oe=66BD4426" 
                        alt='tiktoker'
                        className={cx('avatar')}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>saigonspringroll</strong>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>
                        </p>
                        <p className={cx('name')}>Tri Phan</p>
                    </div>
                </div>
            </Tippy>
        </div>
     );
}

AccountItem.propTypes = {

}

export default AccountItem;