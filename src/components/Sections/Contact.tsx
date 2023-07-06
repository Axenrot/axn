import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center h-full gap-3 font-light">
      <span>
        LinkedIn:{" "}
        <Link
          className="font-bold underline"
          target="_blank"
          href="https://www.linkedin.com/in/yurileon/"
        >
          Yuri Leon
        </Link>
      </span>

      <span>
        Discord:{" "}
        <Link
          className="font-bold underline"
          target="_blank"
          href={"https://discord.gg/wy9HnRjCbN"}
        >
          yurileon
        </Link>
      </span>

      <span>
        E-mail:{" "}
        <a
          className="font-bold underline"
          target="_blank"
          href="mailto:yurileon@hotmail.com.br"
        >
          yurileon@hotmail.com.br
        </a>
      </span>
    </div>
  );
};

export default Contact;
