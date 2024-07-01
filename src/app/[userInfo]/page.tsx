import { getFollowers, getFollowing } from "@/helpers/getFollowers";

import {
  Followers,
  Following,
  FormatedAccountData,
  FollowerData,
  FollowingData,
} from "@/helpers/interfaces";

import AccountsSection from "@/components/AccountsSection/AccountsSection";

const UserInfo = async ({ params }: { params: { userInfo: string } }) => {
  const followers: Followers = await getFollowers(params.userInfo);
  const following: Following = await getFollowing(params.userInfo);

  let followersList: FormatedAccountData[] = [];
  let followingList: FormatedAccountData[] = [];

  if (!followers.detail && !following.detail) {
    followersList = followers.data.items.map((follower: FollowerData) => ({
      name: follower.full_name,
      username: follower.username,
    }));

    followingList = following.data.items.map((follower: FollowingData) => ({
      name: follower.full_name,
      username: follower.username,
    }));
  }

  return (
    <section>
      <h2 className="text-4xl text-center m-4">@{params.userInfo}</h2>

      {followers.detail ? (
        <article>
          {followers.detail === "Private account" ? (
            <h2 className="text-2xl text-center m-6">
              El usuario @{params.userInfo} es privado. Esta aplicación solo
              puede acceder a datos públicos
            </h2>
          ) : (
            <h2 className="text-2xl text-center m-6">
              El usuario @{params.userInfo} no existe o no es válido
            </h2>
          )}
        </article>
      ) : (
        <AccountsSection
          followersList={followersList}
          followingList={followingList}
        />
      )}
    </section>
  );
};

export default UserInfo;
