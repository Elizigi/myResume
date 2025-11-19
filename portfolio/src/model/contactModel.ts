import gitHubImg from "../svg/github.svg";
import linkdinImg from "../svg/linkdin.svg";
import letterinImg from "../svg/letter.svg";

interface Contact {
  image: string;
  link: string;
  name: string;
}
export const contactsModelArray: Contact[] = [
  { name: "email", image: letterinImg, link: "mailto:elizigi876@gmail.com" },

  { name: "gitHub", image: gitHubImg, link: "https://github.com/Elizigi" },
  {
    name: "linkdin",
    image: linkdinImg,
    link: "https://linkedin.com/in/eli-zigdon",
  },
];
