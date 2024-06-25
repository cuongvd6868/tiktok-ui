import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'


const cx = classNames.bind(styles)

function Button({ 
        to, 
        href, 
        primary, 
        outline = false, 
        text = false,
        rounded = false, 
        disabled = false, 
        small = false , 
        large = false, 
        children, 
        onclick, 
        className,
        ...passProps }) 
    {

    let Comp = 'button'
    const props = {
        onclick,
        ...passProps
    }

    // cách 1: bỏ onclick <=> bỏ luôn pointer event (no fix) 
    // if (disabled) {    
    //     delete props.onclick;  
    // }

    //cách 2: remove event listener when btn is disable
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        });
    }

    if(to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className, // khi có className sẽ lấy [className] làm key
        primary,     // <=> primary = primary (es6)
        outline,
        text,
        rounded,
        disabled,
        small,
        large 
    });

    return ( 
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;