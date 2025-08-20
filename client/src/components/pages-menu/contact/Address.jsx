const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconName: "placeholder",
      title: "Address",
      text: (
        <>
          Shubham Avenue, C Wing - 1008, <br />
          Shree Gurudatta Mandir Marg, <br />
          Saibaba Nagar, Pant Nagar,  <br />Ghatkopar
          East, Mumbai, Maharashtra 400075 - India
            {/* Shubham Avenue<br />
            Maharashtra - 400077 */}
          {/* Shubham Avenue<br />
          C wing, Office Number: 1008<br />
          Building No. 19, 21<br />
          Shree Gurudatta Mandir Marg<br />
          Sai Baba Nagar, Pant Nagar<br />
          Ghatkopar East, Mumbai<br />
          Maharashtra - 400077 */}
        </>
      ),
    },
    {
      id: 2,
      iconName: "smartphone",
      title: "Call Us",
      text: (
        <>
          <a href="tel:+8928235501" className="phone">
            +91 892 823 5501
          </a><br />
          <a href="tel:+9870122286" className="phone">
            +91 987 012 2286
          </a>
        </>
      ),
    },
    {
      id: 3,
      iconName: "letter",
      title: "Email",
      text: (
        <>
          <a href="mailto:info@chempharmajobs.com">
            info@chempharmajobs.com
          </a>
          <br />
          <a href="mailto:recruit@chempharmajobs.com">
            recruit@chempharmajobs.com
          </a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div
          className="contact-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <span className="icon">
              <img
                src={`/images/icons/${item.iconName}.svg`}
                alt="icon"
              />
            </span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;
