// functional component
function ConditionalImage(props) {

    const diana = { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Jean-Fran%C3%A7ois_de_Troy_-_Diane_suprise_par_Act%C3%A9on%2C_1734.jpg/800px-Jean-Fran%C3%A7ois_de_Troy_-_Diane_suprise_par_Act%C3%A9on%2C_1734.jpg" }

    const artemis = { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Wall_painting_-_Artemis_and_Kallisto_-_Pompeii_%28VII_12_26%29_-_Napoli_MAN_111441.jpg/505px-Wall_painting_-_Artemis_and_Kallisto_-_Pompeii_%28VII_12_26%29_-_Napoli_MAN_111441.jpg" }

    if (props.goddess == "diana") {
        return <img src={ diana.url } />
    } else {
        return <img src={ artemis.url } />
    }
}

const ConditionalTitle = (props) => {
    return (
        <div className="title">
        {
            (props.goddess == 'diana')
            ? <h3>The Roman Goddess Diana</h3>
            : <h3>The Greek Goddess Artemis</h3>
        }
        </div>
    )
}


const PaintingCollection = () => {
    return (
        <>
            <h2>Paintings</h2>
            <ConditionalTitle goddess='artemis' />
            <ConditionalImage goddess='artemis' />
            <ConditionalTitle goddess='diana' />
            <ConditionalImage goddess='diana' />
        </>
    )
}

export default PaintingCollection