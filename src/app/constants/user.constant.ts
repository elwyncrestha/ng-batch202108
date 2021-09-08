import { User } from '../store/user/user.reducer';

export class UserConstant {
  static JOHN_DOE: User = { id: 1, name: 'John Doe' };
  static JANE_DOE: User = { id: 2, name: 'Jane Doe' };
}
