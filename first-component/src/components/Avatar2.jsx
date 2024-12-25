/* eslint-disable react/prop-types */
export default function Avatar({ person, size = 100, isSepia = false, thickBorder = false }) {
  return (
    <img
      className="avatar"
      src={"https://encrypted-tbn0.gstatic.com/images?q=" + person.imageId}
      alt={person.name}
      width={size}
      height={size}
      style={{
        border: thickBorder ? "5px solid black" : "none",
        filter: isSepia ? "sepia(100%)" : "none",
      }}
    />
  );
}