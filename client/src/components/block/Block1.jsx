

const Block1 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/images/resource/work-1.png",
      title: "Mission",
      text: `To empower recruiters in the chemical and
pharmaceutical industries by connecting them with
the right talent, streamlining the hiring process,
and building long-term partnerships that drive
mutual success.`,
    },
    {
      id: 2,
      icon: "/images/resource/work-2.png",
      title: "Vision",
      text: `To be the leading global platform for Chemical and
Pharma job recruitment, trusted for reliability,
expertise, and service.`,
    },
    {
      id: 3,
      icon: "/images/resource/work-3.png",
      title: "Values",
      text: `To empower recruiters in the chemical and
pharmaceutical industries by connecting them with
the right talent, streamlining the hiring process,
and building long-term partnerships that drive
mutual success`,
    },
    // {
    //   id: 4,
    //   icon: "/images/resource/work3.png",
    //   title: "Collaboration",
    //   text: `Building long-lasting relationships with clients and candidates.`,
    // },
  ];
  return (
    <div className="row">
      {blockContent.map((item) => (
        <div className="work-block col-lg-4 col-md-6 col-sm-12" style={{display:"flex"}} key={item.id}>
          <div className="inner-box">
            <figure className="image">
              <img
               
                src={item.icon}
                alt="how it works"
              />
            </figure>
            <h5>{item.title}</h5>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block1;
