import React from "react";

const Footer = () => {
  // Data for footer links
  const sections = [
    {
      title: "Company",
      links: ["About", "Careers", "Team"],
    },
    {
      title: "Products",
      links: ["Swiggy One", "Swiggy Instamart", "Swiggy Genie"],
    },
    {
      title: "Contact us",
      links: ["Help & Support", "Partner with us", "Ride with us"],
    },
    {
      title: "Legal",
      links: [
        "Terms & Conditions",
        "Cookie Policy",
        "Privacy Policy",
        "Investor Relations",
      ],
    },
    {
      title: "We deliver to",
      links: [
        "Bangalore",
        "Gurgaon",
        "Hyderabad",
        "Delhi",
        "Mumbai",
        "Pune",
        "589 other cities",
      ],
    },
  ];

  return (
    <footer className="bg-black text-center text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-6 md:gap-y-0">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a
                      href="#"
                      className="hover:text-orange-500 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <img
            src="images/swiggylogo.png"
            alt=""
            className="w-28 mx-auto md:mx-0"
          />

          <p>© 2024 Bundl Technologies Pvt. Ltd</p>
          <p className="mt-2">
            We deliver to: Bangalore, Gurgaon, Hyderabad, Delhi, Mumbai, Pune
            and 589 other cities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
