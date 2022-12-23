export const Progress = ({ rate, isInView, animDelay }) => {
  return (
    <>
      <div
        className="progress"
        style={{
          height: "5px",
          width: `${isInView ? rate + "%" : "0%"}`,
          opacity: `${isInView ? 1 : 0}`,
          background: "linear-gradient(to right, #ffea00 0%,  #ffd000 80%)",
          margin: "20px 0px",
          display: "inline-block",
          position: "relative",
          willChange: "width",
          transition: "opacity .4s ease-out, width 1s ease-out",
          transitionDelay: `${animDelay}ms`,
        }}
      >
        <span
          style={{
            position: "absolute",
            display: "block",
            opacity: `${isInView ? 1 : 0}`,
            color: "#f2f4f3",
            fontSize: "16px",
            letterSpacing: "1.1",
            right: "0",
            top: "0",
            transform: "translate(160%, -30%)",
            transition: "opacity 1.4s ease-out",
            transitionDelay: `${animDelay}ms`,
          }}
        >
          {rate}%
        </span>
      </div>
    </>
  );
};
