import s from './Button.module.sass'

function Button({children, ...props}) {
    return (
        <button className={s.btn}{...props}>
            {children}
        </button>
    );
}

export default Button;