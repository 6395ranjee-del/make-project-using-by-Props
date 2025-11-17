import React from "react";
import Card from "./components/Cards.jsx";

const App = () => {
  const jobOpening = [
    {
      brandlogo:
        "https://thumbs.dreamstime.com/b/meta-logo-icon-american-multinational-company-parent-organization-facebook-instagram-whatsapp-others-vector-233392134.jpg ",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo:
        "https://indieground.net/wp-content/uploads/2024/03/indieblog-apple-logo-7.jpg",
      
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Bengaluru, India",
    },
    {
      brandlogo:
        "https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Hyderabad, India",
    },
    {
      brandlogo:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "4 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Bengaluru, India",
    },
    {
      brandlogo:
        "https://pngimg.com/uploads/microsoft/small/microsoft_PNG6.png",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Gurugram, India",
    },
    {
      brandlogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$58/hr",
      location: "Pune, India",
    },
    {
      brandlogo:
        "https://www.nvidia.com/content/nvidiaGDC/us/en_US/about-nvidia/legal-info/logo-brand-usage/_jcr_content/root/responsivegrid/nv_container_392921705/nv_container/nv_image.coreimg.100.1070.png/1703060329053/nvidia-logo-vert.png",
      companyName: "NVIDIA",
      datePosted: "8 days ago",
      post: "AI Research Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Bengaluru, India",
    },
    {
      brandlogo:
        "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-1995-Present.png",
      companyName: "Oracle",
      datePosted: "3 weeks ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Chennai, India",
    },
    {
      brandlogo:
        "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1956.jpg?width=672&height=454&name=ibm-logo-1956.jpg",
      companyName: "IBM",
      datePosted: "9 days ago",
      post: "Cybersecurity Analyst",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$52/hr",
      location: "Mumbai, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpening.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              post={elem.post}
              datePosted={elem.datePosted}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
              logo={elem.brandlogo}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
