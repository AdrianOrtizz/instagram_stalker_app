"use client";

import { FormatedAccountData } from "@/helpers/interfaces";
import { useEffect, useState } from "react";

interface AccountListProps {
  listName: string;
  accountArray: FormatedAccountData[];
}

const AccountList: React.FC<AccountListProps> = ({
  listName,
  accountArray,
}) => {
  const [arrayToDisplay, setArrayToDisplay] = useState<FormatedAccountData[]>([
    ...accountArray,
  ]);
  const [filter, setFilter] = useState<string>("");

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (filter) {
      setArrayToDisplay(
        accountArray.filter(
          (account) =>
            account.name.toLowerCase().includes(filter.toLowerCase()) ||
            account.username.toLowerCase().includes(filter.toLowerCase())
        )
      );
    } else {
      setArrayToDisplay(accountArray);
    }
  }, [filter]);

  return (
    <article className="bg-myPal-containersBG w-96 lg:w-80 xl:w-96 h-192 rounded-lg flex flex-col items-center my-6 ">
      <h2 className="m-6 text-4xl text-center">{listName}</h2>
      <input
        onChange={handleFilter}
        type="text"
        placeholder="Buscar..."
        className="w-80 lg:w-72 xl:w-80 bg-myPal-background p-2 rounded-md"
      />
      <ul className="w-full overflow-auto my-5 flex flex-col items-center">
        {arrayToDisplay.map((account: FormatedAccountData) => {
          return (
            <a
              key={account.username}
              className=" border-t p-2 w-10/12"
              href={`https://www.instagram.com/${account.username}`}
              target="_BLANK"
            >
              <li>
                <h2>@{account.username}</h2>
                <h4>{account.name}</h4>
              </li>
            </a>
          );
        })}
      </ul>
    </article>
  );
};

export default AccountList;
