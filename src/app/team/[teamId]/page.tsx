// src/app/team/[teamId]/page.tsx

import { getTeamData } from '@/lib/mock-data';
import TeamSquadClientWrapper from '../../components/team-squad/TeamSquadClientWrapper';
import { notFound } from 'next/navigation';

type TeamPageProps = {
  params: {
    teamId: string;
  };
};

export default async function TeamPage({ params }: TeamPageProps) {
  // Получаем данные для команды
  const teamData = await getTeamData(params.teamId);

  if (!teamData) {
    // Если данные не найдены, можно показать страницу 404
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8">
      <TeamSquadClientWrapper teamData={teamData} />
    </main>
  );
}