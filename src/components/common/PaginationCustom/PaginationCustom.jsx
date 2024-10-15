"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../ui/pagination";

export const PaginationCustom = ({
  page = 1,
  totalPages = 1,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const range = 1;

  const startPage = Math.max(1, page - range);
  const endPage = Math.min(totalPages, page + range);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const handlePageChange = (pageNum) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("page", pageNum.toString());
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  if (page > totalPages) return <></>;

  return (
    <Pagination>
      <PaginationContent>
        {page > 1 ? (
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={() => handlePageChange(page - 1)} />
          </PaginationItem>
        ) : null}


        {pages.map((pageNum) => (
          <PaginationItem key={pageNum} className="cursor-pointer">
            <PaginationLink
              onClick={() => handlePageChange(pageNum)}
              isActive={pageNum === page}
            >
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        ))}

        {!pages.includes(totalPages) && totalPages > 1 ? (
          <>
            <PaginationEllipsis />
            <PaginationItem className="cursor-pointer">
              <PaginationLink
                onClick={() => handlePageChange(totalPages)}
                isActive={totalPages === page}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        ) : null}

        {page < totalPages ? (
          <PaginationItem className="cursor-pointer">
            <PaginationNext onClick={() => handlePageChange(page + 1)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};
