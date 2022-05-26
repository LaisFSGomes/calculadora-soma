import './style.css';
const Footer = ({info}) => {
  return(
    <section className="footer">
      <p>
      {info}
      </p>
    </ section>
  );
}

export default Footer;