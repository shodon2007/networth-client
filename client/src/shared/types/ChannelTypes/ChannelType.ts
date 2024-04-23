export interface ChannelType {
  id: number | string;
  title: string;
  avatar?: string | undefined;

  // TODO: Decide what type of id we'll be have and the type of participant

  participants: participant[] | string[] | number[];

}

export type participant = {
  id: number | string;
  role: Roles;
}

export enum Roles {
  Admin = "admin",
  Member = "member"
}