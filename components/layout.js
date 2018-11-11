const style = {
  //backgroundColor: "#FFD166",
  padding: 30,
  color: "#222222",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  font: "11px menlo"
};

const Layout = props => {
  return <div style={style}>{props.children}</div>;
};

export default Layout;
