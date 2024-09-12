import banner from './banner.module.scss'
export const Banner = (props) => (
    <>
     <div className={banner.container}>
         <img className={banner.size} src={props.link} alt="banner"/>
         <h1 className={banner.text}>{props.text}</h1>
     </div>
    </>
)