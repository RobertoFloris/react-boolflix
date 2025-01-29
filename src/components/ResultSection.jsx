import Card from "./Card"

const ResultSection = ({ title, film }) => {
  return (
    <section>
      <div className="container text-center">
        <h1>{title}</h1>
      </div>
      <div className="container">
        <div className="row">
          {film?.results?.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResultSection