import Image from 'next/image'

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Smith",
      role: "Software Engineer",
      comment: "Great product! Really helped improve our workflow. The implementation was smooth and the results were immediate.",
      rating: 5,
      backgroundColor: "#f8f4ff"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Product Manager",
      comment: "Excellent customer service and quality. Would definitely recommend to anyone looking for a reliable solution.",
      rating: 4,
      backgroundColor: "#fff4f4"
    },
    {
      id: 3,
      name: "Mike Brown",
      role: "Designer",
      comment: "Intuitive interface and powerful features. It's exactly what our team needed to streamline our processes.",
      rating: 5,
      backgroundColor: "#f4fbff"
    }
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="reviews-container">
      <h2>What Our Customers Say</h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="review-card"
            style={{ backgroundColor: review.backgroundColor }}
          >
            <div className="review-header">
              <div className="reviewer-info">
                <div className="name-badge">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3>{review.name}</h3>
                  <p className="role">{review.role}</p>
                </div>
              </div>
              <div className="rating">{renderStars(review.rating)}</div>
            </div>
            <p className="comment">{review.comment}</p>
            <div className="quote-mark">"</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .reviews-container {
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          background: white;
        }

        h2 {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 2.5rem;
          color: #2d3748;
          position: relative;
        }

        h2:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 2px;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          padding: 1rem;
        }

        .review-card {
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 30px rgba(0,0,0,0.1);
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .reviewer-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .name-badge {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .reviewer-info h3 {
          margin: 0;
          font-size: 1.2rem;
          color: #2d3748;
        }

        .role {
          color: #64748b;
          margin: 0.2rem 0;
          font-size: 0.9rem;
        }

        .rating {
          color: #ffd700;
          font-size: 1.3rem;
          letter-spacing: 2px;
        }

        .comment {
          color: #4a5568;
          line-height: 1.7;
          margin: 0;
          font-size: 1rem;
          position: relative;
          z-index: 1;
        }

        .quote-mark {
          position: absolute;
          bottom: -20px;
          right: 20px;
          font-size: 120px;
          color: rgba(0,0,0,0.03);
          font-family: serif;
        }

        @media (max-width: 768px) {
          .reviews-container {
            padding: 2rem 1rem;
          }

          h2 {
            font-size: 2rem;
          }

          .reviews-grid {
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomerReviews;