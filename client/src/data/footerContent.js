import { paths } from "@/services/paths";

const footerContent = [
  {
    id: 1,
    title: "For Candidates",
    colClass: "col-lg-3",
    menuList: [
      { name: "Browse Jobs", route:paths.job_list},
      { name: "Browse Job Sector", route: paths.job_list},
      { name: "Candidate Dashboard", route:paths.candidate },
      // { name: "Job Alerts", route: "/candidates-dashboard/job-alerts" },
      // {
      //   name: "My Bookmarks",
      //   route: "/candidates-dashboard/short-listed-jobs",
      // },
    ],
  },
  {
    id: 2,
    title: "For Employers",
    colClass: "col-lg-3",
    menuList: [
      {
        name: "Browse Candidates",
        route: paths.candidatelist,
        // route: window.location.pathname,
      },
      { name: "Employer Dashboard", route:paths.employer},
      { name: "Add Job", route: paths.employer_post_jobs},
      // { name: "Job Packages", route: "/employers-dashboard/packages" },
    ],
  },
  {
    id: 3,
    title: "Quick Links",
    menuList: [
      { name: "About Us", route: paths.about },
      // { name: "Job Page Invoice", route: "/invoice" },
      // { name: "Terms and Conditions", route: "/terms" },
      { name: "Blog", route: "/blog-list-v1" },
      { name: "Contact", route: "/contact" },
    ],
  },
  {
    id: 4,
    title: "Helpful Resources",
    colClass: "col-lg-2",

    menuList: [
      { name: "Site Map", route: window.location.pathname},
      { name: "Terms and Conditions", route: "/terms" },
      { name: "Privacy Policy", route: "/privacy" },
      { name: "Faq", route: "/faq" },
      // { name: "Security Center", route: "/" },
      // { name: "Accessibility Center", route: "/" },
    ],
  },
];
export default footerContent