import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Container sx={{ bottom: 0, left: 0, right: 0 }}>
      Blog app for{" "}
      <a
        href="https://fullstackopen.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Full Stack Open
      </a>
      . See{" "}
      <a
        href="https://github.com/pyrhaa/fullStackOpen-part-7/tree/main/blogListExtend"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/pyrhaa/fullStackOpen-part-7/tree/main/blogListExtend
      </a>{" "}
      for the source code in my Github.
    </Container>
  );
};

export default Footer;
