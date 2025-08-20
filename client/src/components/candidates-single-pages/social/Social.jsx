const Social = ({ data }) => {
  const socialContent = [
    // { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/" },
    // { id: 3, icon: "fa-instagram", link: "https://www.instagram.com/" },
    { id: 2, icon: "fa-twitter", link: data?.social_media?.twitter },
    { id: 4, icon: "fa-linkedin-in", link: data?.social_media?.linkedIn },
  ];
  return (
    <div className="social-links">
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <i className={`fab ${item.icon}`}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
