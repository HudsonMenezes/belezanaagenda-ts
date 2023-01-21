interface ErrorProps {
  error?: string | null;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  if (!error) return null;
  return <p style={{ color: "#fff", margin: "1rem 0rem" }}>{error}</p>;
};

export default Error;
