const Offer = ({ offer }) => {
  return (
    <article key={offer.uuid} className="my-4 w-full border-2 text-sm">
      <div className="flex">
        <div className="m-4">{offer.icon}</div>
        <h3 className="font-semibold m-4 text-left text-base">{offer.title}</h3>
      </div>
      <div className="mx-4 mb-4 text-justify">
        <p>{offer.shortDescription || offer.description}</p>
      </div>
    </article>
  );
};

export default Offer;
