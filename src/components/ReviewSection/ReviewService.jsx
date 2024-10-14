import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './ReviewService.module.scss';

const mockReviews = [
  {
    id: 1,
    username: 'John Doe',
    rating: 5,
    text: 'Great product! Great product!Great product!Great product!Great product!Great product!Great product!Great product!Great product!Great product!Great product!Great product!vvGreat product!Great product!vGreat product!Great product!Great product!vvGreat product!Great product!Great product!vvGreat product!Great product!Great product!vGreat product!Great product!vvvGreat product!Great product!Great product!Great product!vvGreat product!Great product!vvvvGreat product!Great product!Great product!',
    photos: ['/api/placeholder/100/100'],
  },
  {
    id: 2,
    username: 'Jane Smith',
    rating: 4,
    text: 'Good, but could be better.',
    photos: [],
  },
  {
    id: 3,
    username: 'Bob Johnson',
    rating: 3,
    text: 'Average product.',
    photos: ['/api/placeholder/100/100', '/api/placeholder/100/100'],
  },
  {
    id: 4,
    username: 'Alice Brown',
    rating: 2,
    text: 'Not satisfied with the quality.',
    photos: [],
  },
  {
    id: 5,
    username: 'Charlie Davis',
    rating: 5,
    text: 'Excellent! Highly recommended.',
    photos: ['/api/placeholder/100/100'],
  },
  {
    id: 6,
    username: 'Eva Wilson',
    rating: 4,
    text: 'Very good product.',
    photos: [],
  },
  {
    id: 7,
    username: 'Frank Miller',
    rating: 1,
    text: 'Disappointed with the purchase.',
    photos: [],
  },
];

const ReviewService = () => {
  const [filterRating, setFilterRating] = React.useState(0);

  const filteredReviews =
    filterRating === 0
      ? mockReviews
      : mockReviews.filter((review) => review.rating === filterRating);

  const ratingCounts = mockReviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {});

  const totalReviews = mockReviews.length;

  return (
    <div className={styles.productReviews}>
      <h2 className={styles.title}>Customer Reviews</h2>
      <div className={styles.reviewsContainer}>
        <div className={styles.filters}>
          <h3 className={styles.filterTitle}>Filter Reviews</h3>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              className={`${styles.filterButton} ${
                filterRating === rating ? styles.active : ''
              }`}
              onClick={() =>
                setFilterRating(rating === filterRating ? 0 : rating)
              }
            >
              <div className={styles.starRating}>
                {rating} <FontAwesomeIcon icon={faStar} />
              </div>
              <span className={styles.reviewCount}>
                ({ratingCounts[rating] || 0})
              </span>
            </button>
          ))}
          {filterRating > 0 && (
            <button
              className={styles.clearFilter}
              onClick={() => setFilterRating(0)}
            >
              Clear filter
            </button>
          )}
        </div>
        <div className={styles.reviewsList}>
          <div className={styles.reviewItems}>
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className={styles.reviewItem}
              >
                <div className={styles.reviewHeader}>
                  <div className={styles.userInfo}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className={styles.username}>{review.username}</span>
                  </div>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon icon={faStar} />
                      // <Star
                      //   key={index}
                      //   size={16}
                      //   className={`${styles.star} ${
                      //     index < review.rating ? styles.filled : ''
                      //   }`}
                      // />
                    ))}
                  </div>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
                {review.photos.length > 0 && (
                  <div className={styles.reviewPhotos}>
                    {review.photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`Review photo ${index + 1}`}
                        className={styles.reviewPhoto}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewService;
