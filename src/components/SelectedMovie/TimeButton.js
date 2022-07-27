export default function TimeButton({ movieData }) {

    
    return (
        <>
            {movieData.showtimes.map(value => {
                return (
                    <button className="availabeTime">{value.name}</button>
                )
            })}
              
        </>

    )

}