const ListItem = (props) => {
    return <li>{props.name}</li>
}

function ListOfAliases() {

    const data = [
        {id: 1, goddess: 'Artemis'},
        {id: 2, goddess: 'Diana'}
    ]

    return (
        <>
            <h3>List of Aliases</h3>
            <ul>
                { data.map(({ id, goddess }) =>
                    <ListItem key={id} name={goddess} />
                )}
            </ul>
        </>
    )
}

export default ListOfAliases