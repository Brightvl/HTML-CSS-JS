export default function CurrentTime() {
    return (
        <>
            Текущее время {new Date().toLocaleTimeString()}
        </>
    )
}