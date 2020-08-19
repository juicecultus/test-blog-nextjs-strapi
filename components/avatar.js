export default function Avatar({ name, picture }) {
  const url = picture.url ?? picture[0].url;

  return (
    <div>
      <img
        src={`${
          url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
        }${url}`}
        alt={name}
      />
      <div>{name}</div>
    </div>
  );
}
