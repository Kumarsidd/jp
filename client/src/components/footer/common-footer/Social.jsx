const Social = () => {
  const socialContent = [
    { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/share/14xUZgTzBG/" },    
    { id: 2, icon: "fa-instagram", link: "https://www.instagram.com/chempharma_jobs/" },
    // { id: 3, icon: "fa-linkedin-in", link: "https://www.linkedin.com/" },
  ];
  return (
    <>
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
    </>
  );
};

export default Social;
