import { ab1, ab2, ab3, ab4, ab5, ab6, aboutBanner } from "@/jp/about";

const ImgBox = () => {
  const imgContent = [
    {
      id: 1,
      block: [{ img: ab1 }],
    },
    {
      id: 2,
      block: [{ img: ab2 }, { img: ab3 }],
    },
    {
      id: 3,
      block: [{ img: ab4 }, { img: ab5 }],
    },
    {
      id: 4,
      block: [{ img: ab6 }],
    },
  ];

  return (
    <div className="images-box">
      <div className="row">
        {imgContent.map((item) => (
          <div className="column col-lg-3 col-md-6 col-sm-6" key={item.id}>
            {item.block.map((itemImg, i) => (
              <figure className="image" key={i}>
                <img
                  src={itemImg.img}
                  alt="about image"
                />
              </figure>
            ))}
          </div>
        ))}
        {/* End .col */}
      </div>
    </div>
  );
};

export default ImgBox;
