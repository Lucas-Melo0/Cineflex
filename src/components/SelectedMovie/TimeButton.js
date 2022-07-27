export default function TimeButton({ movieData }) {

    return (
        <>
            {movieData[0].showtimes.map(value => {
                return (
                        <button className="availabeTime">{value.name}  </button>

                )
            })}

        </>

    )

}