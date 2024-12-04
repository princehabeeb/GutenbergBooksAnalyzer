"use client";
import { faker } from "@faker-js/faker";
import { IconSearch, IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import useTable from "../../utils/useTable";
import Dropdown from "../shared/Dropdown";
import Pagination from "../shared/Pagination";
import SearchBar from "../shared/SearchBar";
import TableActions from "../shared/TableActions";
const options = ["Name", "Price", "Rating"];

const list = Array.from({ length: 40 }).map((_, i) => {
  return {
    id: i + 1,
    industry: faker.helpers.arrayElement([
      "Gaming",
      "Health",
      "Pharma",
      "Business",
      "Agriculture",
      "Automotive",
    ]),
    name: faker.person.firstName(),
    img: `/images/user-${faker.helpers.arrayElement([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])}.png`,
    country: faker.location.country(),
    designation: faker.person.jobTitle(),
    status: faker.helpers.arrayElement([
      "Online",
      "Working",
      "Offline",
      "Suspended",
    ]),
  };
});

const FlexListOne = () => {
  const [selected, setSelected] = useState(options[0]);
  const {
    currentPage,
    deleteItem,
    paginate,
    search,
    sortData,
    tableData,
    totalPages,
    nextPage,
    prevPage,
    startIndex,
    endIndex,
    totalData,
  } = useTable(list, 10);

  return (
    <div className="box">
      <div className="flex flex-wrap justify-between gap-3 items-center bb-dashed mb-6 pb-6">
        <p className="font-medium">Flex List View</p>
        <div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
          <SearchBar handleSearch={search} />
          <div className="flex items-center gap-2">
            <p className="whitespace-nowrap">Sort By : </p>
            <Dropdown
              selected={selected}
              setSelected={setSelected}
              items={options}
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mb-6 pb-6 bb-dashed">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3">
              <th
                onClick={() => sortData("id")}
                className="p-5 font-semibold w-12">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Serial No <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("name")}
                className="p-5 text-start font-semibold w-[25%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  User <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("country")}
                className="p-5 text-start font-semibold w-[18%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Location <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("industry")}
                className="p-5 text-start font-semibold w-[18%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Industry <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("status")}
                className="p-5 text-start font-semibold">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Status <IconSelector size={18} />
                </div>
              </th>
              <th className="p-5 text-start font-semibold">Relations</th>
              <th className="p-5 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(
              (
                { country, id, img, name, industry, status, designation },
                index
              ) => (
                <tr key={id}>
                  <td className="py-2 px-3 text-center">
                    {" "}
                    {id < 10 ? "0" + id : id}
                  </td>
                  <td className="py-1 px-3">
                    <div className="flex items-center gap-3 mr-4">
                      <Image
                        width={32}
                        height={32}
                        className="rounded-full shrink-0"
                        src={img}
                        alt="img"
                      />
                      <div className="flex flex-col">
                        <span className="font-medium inline-block mb-1">
                          {name}
                        </span>
                        <span className="text-xs">{designation}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-3">{country.slice(0, 15)}</td>
                  <td className="py-2 px-3">{industry}</td>
                  <td className="py-2 px-3">
                    <span
                      className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${
                        status == "Online" &&
                        "bg-primary/10 dark:bg-bg3 text-primary"
                      } ${
                        status == "Offline" &&
                        "bg-secondary1/10 dark:bg-bg3 text-secondary1"
                      } ${
                        status == "Suspended" &&
                        "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                      }  ${
                        status == "Working" &&
                        "bg-secondary3dark/10 dark:bg-bg3 text-secondary3dark"
                      }`}>
                      {status}
                    </span>
                  </td>
                  <td className="py-2 px-3">
                    <div className="flex">
                      <Image
                        src="/images/user-2.png"
                        width={32}
                        height={32}
                        className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                        alt="img"
                      />
                      <Image
                        src="/images/user-3.png"
                        width={32}
                        height={32}
                        className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                        alt="img"
                      />
                      <Image
                        src="/images/user-4.png"
                        width={32}
                        height={32}
                        className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                        alt="img"
                      />
                      <Image
                        src="/images/user-5.png"
                        width={32}
                        height={32}
                        className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                        alt="img"
                      />
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex justify-center">
                      <TableActions
                        onDelete={() => deleteItem(id)}
                        fromBottom={
                          index == tableData.length - 1 ||
                          index == tableData.length - 2
                        }
                      />
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      {tableData.length > 0 && (
        <Pagination
          endIndex={endIndex}
          total={totalData}
          totalPages={totalPages}
          currentPage={currentPage}
          goToPage={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          startIndex={startIndex}
        />
      )}
      {!tableData.length && (
        <div className="text-center py-10">
          <div className="text-center mx-auto max-w-[500px] max-md:flex flex-col items-center">
            <div className="flex justify-center mb-5">
              <IconSearch size={60} className="text-primary" />
            </div>
            <h3 className="h3 mb-3 lg:mb-6">No matching results</h3>
            <p>
              Looks like we couldn&nbsp;t find any matching results for your
              search terms. Try other search terms.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlexListOne;
