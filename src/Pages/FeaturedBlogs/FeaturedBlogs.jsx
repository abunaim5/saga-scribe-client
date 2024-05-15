import { useReactTable, getCoreRowModel, flexRender, createColumnHelper, getSortedRowModel } from '@tanstack/react-table'
import useFetch from '../../Hooks/useFetch';
import { useMemo } from 'react';
import { Table } from 'flowbite-react';
import { BiSortAlt2 } from "react-icons/bi";
import Loader from '../../components/Loader';

const FeaturedBlogs = () => {
    const { isLoading, data } = useFetch(
        'featured',
        '/featured'
    );

    const columnHelper = createColumnHelper()

    const columns = useMemo(() => [
        {
            header: 'Serial no.',
            accessorKey: '_id',
            cell: ({ row }) => <>{row.index + 1}</>
        },
        {
            accessorKey: 'title',
            header: 'Title',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'user_name',
            header: 'Blog Owner',
            sortingFn: 'alphanumeric',
            cell: (props) => <p>{props.getValue()}</p>
        },
        columnHelper.accessor('user_photo', {
            header: 'Profile',
            cell: url => <div className='rounded-full'><img className='rounded-full w-14' src={url.getValue()} alt='Owner profile picture' /></div>
        })
    ], [columnHelper]);

    const table = useReactTable({
        data,
        columns,
        getSortedRowModel: getSortedRowModel(),
        getCoreRowModel: getCoreRowModel()
    })
    console.log(table.getHeaderGroups())

    if (isLoading) {
        return <Loader />
    }

    // className={`w-[${table.getTotalSize()}]`}
    return (
        <div>
            <div className="flex items-center justify-center border-2 border-black h-20 mb-5">
                <h2 className="text-3xl font-bold uppercase">Featured Blogs</h2>
            </div>
            <div className="overflow-x-auto max-w-6xl mx-auto mb-28">
                <Table hoverable>
                    {table.getHeaderGroups().map(headerGroup => <Table.Head key={headerGroup.id} className=''>
                        {headerGroup.headers.map(header => <Table.HeadCell key={header.id}>
                            <div onClick={header.column.getToggleSortingHandler()} className='flex items-center gap-2  cursor-pointer h-10'><span>{header.column.columnDef.header}</span> <span>{header.column.getCanSort() && <span className='text-base'><BiSortAlt2 /></span>}</span></div>


                        </ Table.HeadCell>)}
                    </ Table.Head>)}
                    <Table.Body>
                        {table.getRowModel().rows.map(row => <Table.Row key={row.id}>
                            {row.getVisibleCells().map(cell => <Table.Cell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </Table.Cell>)}
                        </Table.Row>)}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default FeaturedBlogs;