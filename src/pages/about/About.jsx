import useProductContext from "../../hooks/useProductContext";

const About = () => {
  const myName = useProductContext();
  return (
    <div>
      {myName}
      <p>This is about page</p>
    </div>
  );
};

export default About;
