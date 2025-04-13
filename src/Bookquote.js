

export default function Bookquote({ref,classname,quote, author, pstyle}) {
    return(
        <li className={classname} ref={ref}>
            <h3>{quote}</h3>
            <p className={pstyle}>{author}</p>
        </li>
    )
}