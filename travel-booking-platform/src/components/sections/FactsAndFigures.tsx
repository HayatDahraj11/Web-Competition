const FactsAndFigures = () => {
    const stats = [
      {
        id: 1,
        number: "500+",
        label: "Happy Clients",
        icon: "👥"
      },
      {
        id: 2,
        number: "95%",
        label: "Success Rate",
        icon: "📈"
      },
      {
        id: 3,
        number: "24/7",
        label: "Support",
        icon: "🔧"
      },
      {
        id: 4,
        number: "10+",
        label: "Years Experience",
        icon: "⭐"
      }
    ];
  
    return (
      <div className="facts-container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <span className="icon">{stat.icon}</span>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
  
        <style jsx>{`
          .facts-container {
            padding: 2rem;
            background: #f8fafc;
          }
  
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            max-width: 1000px;
            margin: 0 auto;
          }
  
          .stat-card {
            text-align: center;
            padding: 1.5rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            transition: transform 0.2s ease;
          }
  
          .stat-card:hover {
            transform: translateY(-5px);
          }
  
          .icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            display: block;
          }
  
          h3 {
            color: #2d3748;
            font-size: 1.8rem;
            margin: 0.5rem 0;
          }
  
          p {
            color: #64748b;
            margin: 0;
            font-size: 0.9rem;
          }
  
          @media (max-width: 768px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
  
          @media (max-width: 480px) {
            .stats-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    );
  };
  
  export default FactsAndFigures;