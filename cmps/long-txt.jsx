const { useState } = React

export function LongTxt({ txt , length}) {
    const [isReadMore, setIsReadMore] = useState(true)

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }

    return <p className="long-txt">
        {isReadMore ? txt.slice(0, length) : txt}
        <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? " ...read more" : " show less"}
        </span>
        </p>
}
