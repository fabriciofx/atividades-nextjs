import Image from 'next/image';

type ProfileCardProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileCard({ name, bio, imageUrl }: ProfileCardProps) {
  return (
    <div
      className="
        flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg
        rounded-2xl p-6 w-full max-w-sm transition-transform hover:scale-105
        hover:shadow-2xl
      "
    >
      <div className="w-32 h-32 relative mb-4">
        <Image
          src={imageUrl}
          alt={`${name} profile`}
          width="128"
          height="128"
          className="
            rounded-full object-cover border-4 border-indigo-500 shadow-md
          "
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        {name}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mt-2">{bio}</p>
    </div>
  );
}
