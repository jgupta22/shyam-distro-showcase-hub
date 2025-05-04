
import { Clock, Users, CheckCircle, UserCheck } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      number: "10+",
      text: "Years In Business",
      icon: <Clock size={32} />,
      color: "bg-brand-red",
    },
    {
      number: "500+",
      text: "Happy Clients",
      icon: <Users size={32} />,
      color: "bg-white",
    },
    {
      number: "1k+",
      text: "Projects Completed",
      icon: <CheckCircle size={32} />,
      color: "bg-brand-darkblue",
    },
    {
      number: "50+",
      text: "Trained Staff",
      icon: <UserCheck size={32} />,
      color: "bg-brand-red",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`${stat.color} ${
              stat.color === 'bg-white' ? 'text-gray-800' : 'text-white'
            } py-12 px-4 flex flex-col items-center justify-center`}
          >
            {stat.icon}
            <h3 className="text-3xl md:text-4xl font-bold mt-4">{stat.number}</h3>
            <p className="text-center">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
