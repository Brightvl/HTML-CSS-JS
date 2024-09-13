import banner from './banner.module.scss'
export const Banner = (props) => (
    <div className={banner.container}>
        <img className={banner.size} src={props.link} alt="banner" />
        <p className={banner.text}>{props.children}</p>
    </div>
);
