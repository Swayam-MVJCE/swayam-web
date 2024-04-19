// app/admin/[[...nextadmin]]/page.tsx
import { NextAdmin } from '@premieroctet/next-admin';
import { getServerSession } from 'next-auth/next';
import { getPropsFromParams } from '@premieroctet/next-admin/dist/appRouter';
import '@premieroctet/next-admin/dist/styles.css';
import prisma from '../../../utils/client';
import schema from '../../../../prisma/json-schema/json-schema.json'; // generated by prisma-json-schema-generator on yarn run prisma generate
import {
  deleteItem,
  searchResource,
  submitFormAction,
} from '../../actions/nextadmin';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import ViewScreenshotButton from '@/components/ViewScreenshotButton';

export const options = {
  basePath: '/admin',
  model: {
    Event: {
      toString: (event) => `${event.title}`,
      title: 'Event',
      edit: {
        display: [
          'slug',
          'title',
          'description',
          'judgingCriteria',
          'rules',
          'firstPrize',
          'secondPrize',
          'registrationFee',
          'minParticipants',
          'maxParticipants',
          'time',
          'date',
          'venue',
          'category',
          'isGroup',
        ],
        fields: {
          judgingCriteria: {
            format: 'textarea',
          },
          rules: {
            format: 'textarea',
          },
        },
      },
    },
    User: {
      toString: (item) => item.name,
      title: 'User',
    },
    Registration: {
      title: 'Registrations',
      edit: {
        fields: {
          participants: {
            format: 'textarea',
          },
          screenshotUrl: {
            input: <ViewScreenshotButton />,
          },
        },
      },
    },
  },
  pages: {
    '/export-registrations': {
      title: 'Export Registrations',
    },
  },
};
export default async function AdminPage({ params, searchParams }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/login');
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user || !user.role || user.role !== 'ADMIN') {
    return (
      <div className="w-screen h-screen text-2xl flex flex-col items-center justify-center text-black">
        <h1>Access Denied</h1>
        <p>You need to be an admin to access this page.</p>
        <Link href="/" className="underline text-blue-400">
          Go back to home
        </Link>
      </div>
    );
  }
  const props = await getPropsFromParams({
    params: params.nextadmin,
    searchParams,
    options: options,
    prisma,
    schema,
    action: submitFormAction,
    deleteAction: deleteItem,
    searchPaginatedResourceAction: searchResource,
  });

  return (
    <div className="w-screen h-full text-black">
      <NextAdmin {...props} />
    </div>
  );
}
