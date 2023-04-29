// COMPOSICAO

class Profile {
  private name: string;
  private email: string;

  public setName(name: string) {
    this.name = name;
  };

  public setEmail(email: string) {
    this.email = email;
  };

  public toString(): string {
    return `name - [${this.name}] - email - [${this.email}]`;
  }
}

class SocialMediaAccount {
  private profile = new Profile();

  public editProfile(name: string, email: string) {
    this.profile.setName(name);
    this.profile.setEmail(email);
  }

  public printProfile() {
    console.log(this.profile.toString());
  }
}

const socialMediaAccount = new SocialMediaAccount();
socialMediaAccount.editProfile('Manuella', 'manu@trybe.com');
socialMediaAccount.printProfile();

// AGREGACAO

class Friend {
  private nickname: string;

  public getNickname(): string {
    return this.nickname;
  }

  public setNickname(nickname: string) {
    this.nickname = nickname;
  }
}

class SocialMediaAccount2 {
  private friends = new Array<Friend>();

  public addFriend(friend: Friend) {
    this.friends.push(friend);
  }

  public printFriends() {
    this.friends.map((friend) => console.log(friend));
  }
}

const socialMediaAccount2 = new SocialMediaAccount2();

const friendCarol = new Friend();
friendCarol.setNickname('Carol');

const friendFernando = new Friend();
friendFernando.setNickname('Fernando');

socialMediaAccount2.addFriend(friendCarol);
socialMediaAccount2.addFriend(friendFernando);
socialMediaAccount2.printFriends();
