import body from "./body.module.scss";

const Body = () => {
  return (
    <>
      <section className={body.section}>
        <img
          className={body.picture1}
          src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
          alt="doggo"
        />
        <img
          className={body.picture2}
          src="https://i.picsum.photos/id/349/3264/2176.jpg?hmac=WNt0QoaZyFRaiL5yitDV4LOXzdHV5Z9tHUxbc6KdBSY"
          alt="fashion"
        />
      </section>
      <h1 className={body["gooey-text"]}>
        Move the cursor around to see the gooey cursor effect!
      </h1>
    </>
  );
};

export default Body;
