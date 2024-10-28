const Footer: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8080730922236!2d-75.5829927!3d6.2053149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46827857a032a7%3A0x53df4de7393e8582!2sRodeo%20Skateboard!5e0!3m2!1ses!2sco!4v1698533059462!5m2!1ses!2sco"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Footer;
