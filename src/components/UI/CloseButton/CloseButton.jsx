import s from './CloseButton.module.sass'


function CloseButton({children, handler}) {
    return (
        <div className={s.closeBtn}
             onClick={handler}>
            {children}
        </div>
    );
}

export default CloseButton;