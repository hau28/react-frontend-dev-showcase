export function RandomImage({ grow, quality = 15, style }) {
  function getRandomDimension() {
    return (Math.floor(Math.random() * 32) + 16) * quality;
  }

  function getSize() {
    if (style) {
      return style;
    }
    if (grow)
      return {
        boxSizing: "border-box",
        borderBottom: "solid white 24px",
        flex: 1,
        objectFit: "cover",
      };

    return {
      boxSizing: "border-box",
      borderBottom: "solid white 24px",
      width: "100%",
      objectFit: "cover",
    };
  }

  return (
    <img
      style={getSize()}
      src={`https://picsum.photos/${getRandomDimension()}/${getRandomDimension()}`}
      alt="lorem ipsum"
    />
  );
}
