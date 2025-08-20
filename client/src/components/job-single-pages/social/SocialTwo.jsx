const SocialTwo = ({ data }) => {
  // Create dynamic shareable content
  const shareTitle = `Check out this job at ${data?.company?.name}: ${data?.title}`;
  const shareUrl = window.location.href; // The current URL (can be replaced with a job-specific URL)
  const shareDescription = `Position: ${data?.title}\nCompany: ${data?.company?.name}\nLocation: ${data?.location}\nSalary: ${data?.candidate_requirement?.salary_from} - ${data?.candidate_requirement?.salary_to}`;

  // Social media content with dynamic URLs
  const socialContent = [
    {
      id: 1,
      name: "Facebook",
      icon: "fa-facebook-f",
      iconClass: "facebook",
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareTitle)}`,
    },
    {
      id: 2,
      name: "Twitter",
      icon: "fa-twitter",
      iconClass: "twitter",
      link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: "fa-linkedin",
      iconClass: "linkedin",
      link: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}&summary=${encodeURIComponent(shareDescription)}&source=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          className={item.iconClass}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <i className={`fab ${item.icon}`}></i> {item.name}
        </a>
      ))}
    </>
  );
};

export default SocialTwo;
