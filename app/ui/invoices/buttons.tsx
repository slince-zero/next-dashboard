import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { deleteInvoice } from '@/app/lib/actions'

export function CreateInvoice() {
  return (
    <Link
      href='/dashboard/invoices/create'
      className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
      <span className='hidden md:block'>Create Invoice</span>{' '}
      <PlusIcon className='h-5 md:ml-4' />
    </Link>
  )
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className='rounded-md border p-2 hover:bg-gray-100'>
      <PencilIcon className='w-5' />
    </Link>
  )
}

export function DeleteInvoice({ id }: { id: string }) {
  // 用 bind 的缘故，主要是为了传递参数，确保表单提交以后，会触发 deleteInvoice，而 action 又是通过函数来触发的
  const deleteInvoiceWithId = deleteInvoice.bind(null, id)

  return (
    <>
      <form action={deleteInvoiceWithId}>
        <button
          type='submit'
          className='rounded-md border p-2 hover:bg-gray-100'>
          <span className='sr-only'>Delete</span>
          <TrashIcon className='w-4' />
        </button>
      </form>
    </>
  )
}
