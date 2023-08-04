import { useState } from 'react'
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
	PaginationState,
	getPaginationRowModel,
} from '@tanstack/react-table'
import { usersData } from './tableData'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

type User = {
	name: string
	email: string
	friendId: number
	phoneNumber: string
	joinDate: string
	balance: number
}

const defaultData: User[] = usersData
const columnHelper = createColumnHelper<User>()

const columns = [
	columnHelper.accessor('name', {
		cell: (info) => info.getValue(),
		header: () => 'Name',
	}),
	columnHelper.accessor('email', {
		cell: (info) => info.getValue(),
		header: () => 'Email',
	}),
	columnHelper.accessor('friendId', {
		cell: (info) => info.getValue(),
		header: () => 'Friend ID',
	}),
	columnHelper.accessor('phoneNumber', {
		cell: (info) => info.getValue().toString(),
		header: () => 'Phone Number',
	}),
	columnHelper.accessor('joinDate', {
		cell: (info) => info.getValue().split('T')[0],
		header: () => 'Date Joined',
	}),
	columnHelper.accessor('balance', {
		cell: (info) => `$ ${info.getValue().toString()}`,
		header: () => 'balance',
	}),
]

const Table = () => {
	const [data, setData] = useState(() => [...defaultData])

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	})
	return (
		<div className='table__container px-2 container-dark-bordered'>
			<table className='w-full border-separate border-spacing-4'>
				<thead className='table__header text-zinc-700 text-left '>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</th>
							))}
							<th className='flex justify-between items-center w-fit gap-3'>
								<button
									className={`${
										!table.getCanPreviousPage() && 'hidden'
									} text-white`}
									onClick={() => table.previousPage()}>
									{'<'}
								</button>
								{table.getState().pagination.pageIndex + 1}/
								{table.getPageCount()}
								<button
									className={`${
										!table.getCanNextPage() && 'hidden'
									} text-white`}
									onClick={() => table.nextPage()}>
									{'>'}
								</button>
							</th>
						</tr>
					))}
				</thead>

				<tbody className='table__body text-white text-sm font-medium'>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
							<td className='text-purple-700 flex justify-between items-center w-fit gap-1 font-light'>
								Manage
								<ArrowRightAltIcon />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table
