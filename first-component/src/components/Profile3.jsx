/* eslint-disable react/prop-types */
import Avatar from "./Avatar2";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        person={{
          name: "Dawyne Johnson",
          imageId: "tbn:ANd9GcQCM12Mcttv-ewdEIeSMI4iUC3btdnDX3fD2w&s",
        }}
        size={150}
        isSepia={true}
        thickBorder={true}
      />
    </Card>
  );
}
