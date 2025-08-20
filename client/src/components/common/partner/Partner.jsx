




import { API_EMPLOYER_PATH } from "@/lib/config";
import { get } from "@/services/api";
import { paths } from "@/services/paths";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Partner = () => {
  const settings = {
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1200,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderGallery = [
    { id: 1, link: "#", imgNumber: "1-1" },
    { id: 2, link: "#", imgNumber: "1-2" },
    { id: 3, link: "#", imgNumber: "1-1" },
    { id: 4, link: "#", imgNumber: "1-4" },
    { id: 5, link: "#", imgNumber: "1-5" },
    { id: 6, link: "#", imgNumber: "1-6" },
    { id: 7, link: "#", imgNumber: "1-7" },
  ];
  const { data, isLoading } = useQuery({
    queryKey: [`utilities/employers`,],
    queryFn: async () => {
        try {
            const res = (await get(`/utilities/employers`)).data;
            return res.data  || []
        } catch (error) {
            return null
        }
    },
});
if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Slider {...settings} arrows={false}>
        {data?.map((item) => (
          <li className="slide-item" key={item.id}>
            <figure className="image-box">
              <Link to={`${paths.publicemployer}/${item._id}`}>
              <img src={API_EMPLOYER_PATH + item?.logo?.filename} alt="logo"              onError={(e) => e.target.src = "/images/pharma.webp"}
              />

              </Link>
            </figure>
          </li>
        ))}
      </Slider>
    </>
  );
};

export default Partner;
