import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div>
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <h3>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a>{title}</a>
        </Link>
      </h3>
      <div>
        <Date dateString={date} />
      </div>
      <p>{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
