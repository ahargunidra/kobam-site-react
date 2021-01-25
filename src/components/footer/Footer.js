import "./footer.css";

function Footer() {
  const tanggal = new Date();
  return (
    <footer className="footer py-3 bg-danger mt-4">
      <div className="container">
        <div className="text-center">
          <span className="text-light">
            &copy; {tanggal.getFullYear()} Kobam | Dibuat dengan react.js
            <img src="/img/react.svg" alt="react" width="16px" />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
