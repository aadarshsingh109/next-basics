"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <input
      className="px-3 py-1.5 w-full border border-black rounded-2xl"
      type="text"
      placeholder="search courses"
      defaultValue={searchParams.get("q")?.toString()}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
