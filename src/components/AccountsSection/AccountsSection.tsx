import AccountList from "../AccountsList/AccountsList";

import { FormatedAccountData } from "@/helpers/interfaces";

interface AccountsSectionProps {
  followersList: FormatedAccountData[];
  followingList: FormatedAccountData[];
}

const AccountsSection: React.FC<AccountsSectionProps> = ({
  followersList,
  followingList,
}) => {
  const noFollowBackList = followingList.filter((following) => {
    return !followersList.some(
      (follower) => follower.username === following.username
    );
  });

  return (
    <section className="flex flex-col items-center lg:flex-row lg:justify-evenly my-12">
      <AccountList listName="Seguidores" accountArray={followersList} />
      <AccountList listName="Seguidos" accountArray={followingList} />
      <AccountList
        listName="Cuentas que no te siguen"
        accountArray={noFollowBackList}
      />
    </section>
  );
};

export default AccountsSection;
