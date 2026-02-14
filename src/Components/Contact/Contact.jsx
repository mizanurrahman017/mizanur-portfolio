import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
  FaCode,
  FaLaptopCode,
  FaDiscord,
  FaSlack,
} from "react-icons/fa";

// আপনার data + link
const contacts = [
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "mizanur-rahman-asif",
    link: "https://www.linkedin.com/in/mizanur-rahman-asif-599711383/",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "mizanurrahmanasif",
    link: "https://github.com/mizanurrahman017",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "asif.dev@gmail.com",
    link: "mailto:asif.dev@gmail.com",
  },
  {
    icon: <FaTwitter />,
    title: "Twitter",
    value: "asif_codes",
    link: "https://twitter.com/asif_codes",
  },
  {
    icon: <FaCode />,
    title: "LeetCode",
    value: "asif_rahman",
    link: "https://leetcode.com/asif_rahman",
  },
  {
    icon: <FaLaptopCode />,
    title: "Codeforces",
    value: "asif_rahman",
    link: "https://codeforces.com/profile/asif_rahman",
  },
  {
    icon: <FaDiscord />,
    title: "Discord",
    value: "asif#1234",
    link: "#", // যদি Discord link না থাকে
  },
  {
    icon: <FaSlack />,
    title: "V Judge",
    value: "Mizanur Asif",
    link: "https://vjudge.net/user/MizanurAsif",
  },
];

const Contact = () => {
  return (
    <section className="w-full bg-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-3">
          <span className="text-purple-600">#</span> Contact
        </h2>
        <p className="text-gray-600 mb-12">
          Connect with me through social media.
        </p>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 border border-purple-100 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 text-xl rounded-lg">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
