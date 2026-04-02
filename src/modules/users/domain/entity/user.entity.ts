interface UserProps {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export class User {
  constructor(public readonly props: UserProps) {}

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  static create(props: UserProps) {
    return new User(props);
  }
}
