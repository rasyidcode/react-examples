function Profile() {
  return <img src="https://d.newsweek.com/en/full/2551118/elon-musk.jpg" alt="Elon Musk" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

