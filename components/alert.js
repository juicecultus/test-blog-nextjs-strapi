import Container from './container';
import cn from 'classnames';
import { EXAMPLE_PATH } from '@/lib/constants';

export default function Alert() {
  return (
    <div>
      <Container>
        <div>
          Get access to all of my exclusive giveaways on{' '}
          <a href={`https://instagram.com/${EXAMPLE_PATH}`}>INSTA</a>
        </div>
      </Container>
    </div>
  );
}
