export interface FollowerData {
  full_name: string;
  id: string;
  is_private: boolean;
  is_verified: boolean;
  profile_pic_url: string;
  username: string;
}

export interface Followers {
  data: {
    count: number;
    items: FollowerData[];
    total: number;
  };
  pagination_token: string;
  detail?: string;
}

export interface FollowingData extends FollowerData {
  account_badges: [];
  fbid_v2: string;
  has_anonymous_profile_picture: boolean;
  is_favorite: boolean;
  is_possible_bad_actor: {
    is_possible_impersonator: {
      connected_similar_user_id: any;
      is_unconnected_impersonator: boolean;
    };
    is_possible_impersonator_threads: {
      connected_similar_user_id: any;
      is_unconnected_impersonator: boolean;
    };
    is_possible_scammer: boolean;
  };
  is_possible_scammer: boolean;
  latest_reel_media: number;
  profile_pic_id: string;
  third_party_downloads_enabled: number;
}

export interface Following {
  data: {
    count: number;
    items: FollowingData[];
    total: number;
  };
  pagination_token: string;
  detail?: string;
}

export interface FormatedAccountData {
  name: string;
  username: string;
}
