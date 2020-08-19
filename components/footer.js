import Container from './container';
import { EXAMPLE_PATH } from '@/lib/constants';

export default function Footer() {
  return (
    <footer>
      <Container>
        <div>
          <h3>
            copyright &copy; {new Date().getFullYear()} - alldadstalk - all
            rights reserved
          </h3>
        </div>
      </Container>
    </footer>
  );
}
