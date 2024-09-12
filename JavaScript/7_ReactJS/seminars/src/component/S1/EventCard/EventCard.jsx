export function EventCard(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.date}</p>
            <p>{props.location}</p>
        </div>
    )
}