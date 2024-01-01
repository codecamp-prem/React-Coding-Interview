type UserProps = {
  name?: string;
  img?: string;
  handle?: string;
};
function Avatar({ img, name }: UserProps) {
  return <img src={img} alt={name} />;
}
function Name({ name }: UserProps) {
  return <h4>{name}</h4>;
}
function Handle({ handle }: UserProps) {
  return <p>@{handle}</p>;
}
function Badge({
  style,
  user,
  addFriend,
}: {
  style: {};
  user: UserProps;
  addFriend: () => void;
}) {
  return (
    <div style={style}>
      <Avatar img={user.img} name={user.name} />
      <div>
        <Name name={user.name} />
        <Handle handle={user.handle} />
        <button onClick={addFriend}>Add as Friend</button>
      </div>
    </div>
  );
}
const FunctionAsProp = () => {
  return (
    <Badge
      user={{
        name: "John Doe",
        img: "https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png",
        handle: "johndoe",
      }}
      style={{
        width: 300,
        margin: "0 auto",
        border: "1px solid",
        borderRadius: 8,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center",
      }}
      addFriend={() => alert("Added as Friend")}
    />
  );
};

export default FunctionAsProp;
