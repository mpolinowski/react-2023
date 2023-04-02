// working with props
function Paragraph(props) {
    return (
    <p>In ancient { props.origin }, { props.name } is the { props.profession }. She was heavily identified with Selene, the personification of the Moon, and Hecate, another lunar deity, and was thus regarded as one of the most prominent lunar deities in mythology, alongside the aforementioned two. The goddess { props.equivalent } is her Roman equivalent.</p>
    )
}

function SelfIntroduction() {
    return (
    <>
        <Paragraph
            origin = "Greek mythology"
            name = "Artemis"
            profession = "goddess of the hunt"
            equivalent = "Diana" />
    </>
    )
}

export default SelfIntroduction