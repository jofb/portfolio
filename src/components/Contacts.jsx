import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  const contacts = [
    ["My Github", "https://github.com/jofb", faGithub],
    ["Email me", "mailto:jordanwyldebrowne@gmail.com", faEnvelope],
    [
      "LinkedIn",
      "https://www.linkedin.com/in/jordan-wylde-browne-71b1942a4/",
      faLinkedin,
    ],
  ];

  const contactIcons = contacts.map((contact, i) => (
    <a
      title={contact[0]}
      href={contact[1]}
      target="_blank"
      rel="noopener noreferrer"
      key={i}
    >
      <FontAwesomeIcon
        icon={contact[2]}
        className="text-slate-200 text-4xl hover:text-yellow-400"
        key={i}
      />
    </a>
  ));
  return (
    <div className="mt-auto p-5 select-none">
      <p className="text-xl m-auto text-slate-200 w-min font-light">
        Contact Me
      </p>
      <div className="pt-4 flex flex-row justify-around">{contactIcons}</div>
    </div>
  );
}

export default Contacts;
