/* eslint-disable react/prop-types */
function Avatar({ person, size = 100, isSepia = false, thickBorder = false }) {
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

export default function Profile() {
  return (
    <div>
      <Avatar
        person={{
          name: "Dawyne Johnson",
          imageId: "tbn:ANd9GcQCM12Mcttv-ewdEIeSMI4iUC3btdnDX3fD2w&s",
        }}
        isSepia={true}
      />
      <Avatar
        person={{
          name: "Dawyne Johnson #2",
          imageId: "tbn:ANd9GcTyrNBlSrjGN8asUF7CmvEfTZa1yGWyLnuYrA&s",
        }}
        size={80}
        thickBorder={true}
      />
      <Avatar
        person={{
          name: "Dawyne Johnson #3",
          imageId: "tbn:ANd9GcTmSyvzFUtbiyqWwZvi2Na6OB7qeOj5Cwavlg&s",
        }}
        size={50}
        isSepia={true}
        thickBorder={true}
      />
    </div>
  );
}
