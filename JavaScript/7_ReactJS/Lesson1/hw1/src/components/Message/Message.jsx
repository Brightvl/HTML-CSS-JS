import style from './style.module.scss'
export const Message = (props) => (
    <>
        <p className={style.color}>{props.text}</p>
    </>
);