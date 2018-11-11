const DisableScrolling = props => {
  return (
    <div>
      <style jsx global>
        {`
          html {
            height: 100%;
            width: 100%;
            overflow: hidden;
          }

          body {
            height: 100%;
            padding: 0;
            overflow: auto;
            margin: 0;
            -webkit-overflow-scrolling: touch;
          }
        `}
      </style>
      {props.children}
    </div>
  );
};

export default DisableScrolling;
