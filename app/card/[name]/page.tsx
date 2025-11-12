'use client';

import type { ParamValue } from 'next/dist/server/request/params';
import { useParams } from 'next/navigation';
import ProfileCard from '@/src/components/profile-card/ProfileCard';

type Person = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function CardPage() {
  const params = useParams();
  const people = new Map<ParamValue, Person>([
    [
      'ana',
      {
        name: 'Ana Silva',
        bio: 'Desenvolvedora Frontend apaixonada por Next.JS',
        imageUrl: `/${params.name}.png`
      }
    ],
    [
      'luis',
      {
        name: 'Luis Cordeiro',
        bio: 'Desenvolvedor Frontend apaixonada por React',
        imageUrl: `/${params.name}.png`
      }
    ]
  ]);
  return (
    <div
      className="
        min-h-screen flex items-center justify-center bg-gray-100
        dark:bg-gray-900 p-4
      "
    >
      <ProfileCard
        name={people.get(params.name)?.name || ''}
        bio={people.get(params.name)?.bio || ''}
        imageUrl={people.get(params.name)?.imageUrl || ''}
      />
    </div>
  );
}
