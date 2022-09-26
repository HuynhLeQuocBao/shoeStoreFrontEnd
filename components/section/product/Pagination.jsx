import ReactPaginate from 'react-paginate';
import { Product } from './Product'
import { useEffect, useState } from 'react';
import Link from "next/link";

export function Pagination({ ...props }) {
    const { data, itemsPerPage } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 md:gap-8 pb-14">
                {currentItems.map((item) => (
                    <Link key={item._id} href={"/"}>
                        <div className="cursor-pointer" onClick={() => alert(item._id)}>
                            <Product
                                image={item.arrayImage[0].filename}
                                name={item.name}
                                price={item.price}
                            />
                        </div>
                    </Link>
                ))}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="w-full list-none flex flex-grow justify-center items-center mb-8 gap-4 py-2"
                pageLinkClassName="px-4 py-2 cursor-pointer rounded font-normal hover:bg-primary hover:text-white"
                previousLinkClassName="px-4 py-2 cursor-pointer rounded font-normal hover:bg-primary hover:text-white"
                nextLinkClassName="px-4 py-2 cursor-pointer rounded font-normal hover:bg-primary hover:text-white"
                activeLinkClassName="bg-primary text-white"
            />
        </>
    );
}