'use client';

import React, { useRef, useState, useEffect } from 'react';
import CommentCard from './CommentCard';
import styles from './PeopleSaySection.module.css';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const comments = [
  { text: 'Amazing dive experience, highly recommend!' },
  { text: 'Friendly guides and stunning underwater views!' },
  { text: 'My first dive and it was unforgettable!' },
  { text: 'Top-notch equipment and safety measures.' },
  { text: 'I felt so comfortable the entire time.' },
  { text: 'Amazing dive experience, highly recommend!' },
  { text: 'Friendly guides and stunning underwater views!' },
  { text: 'My first dive and it was unforgettable!' },
  { text: 'Top-notch equipment and safety measures.' },
  { text: 'I felt so comfortable the entire time.' },
  { text: 'My first dive and it was unforgettable!' },
  { text: 'Top-notch equipment and safety measures.' },
  { text: 'I felt so comfortable the entire time.' },
  { text: 'Amazing dive experience, highly recommend!' },
  { text: 'Friendly guides and stunning underwater views!' },
  { text: 'My first dive and it was unforgettable!' },
  { text: 'Top-notch equipment and safety measures.' },
  { text: 'I felt so comfortable the entire time.' },
];

const PeopleSaySection = () => {
  // Refs for prev/next buttons
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // Because refs are null on first render, control when to enable navigation
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <section className={styles.peopleSaySection} aria-label="Customer testimonials">
      <div className={styles.peopleSaySection__inner}>
        <h2 className={styles.sectionTitle}>
          <FaQuoteLeft aria-hidden="true" className={styles.icon} /> What people say about us!
        </h2>
        <p className={styles.sectionSubtitle}>
          Real stories from our happy divers — sharing their unforgettable moments, friendly experiences, and love for the ocean with us.
        </p>

        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          loop
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3500, disableOnInteraction: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={
            navReady
              ? {
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }
              : undefined
          }
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          a11y={{
            prevSlideMessage: 'Previous testimonial',
            nextSlideMessage: 'Next testimonial',
            paginationBulletMessage: 'Go to testimonial {{index}}',
          }}
        >
          {comments.map((comment, i) => (
            <SwiperSlide
              key={i}
              tag="article"
              aria-roledescription="slide"
              aria-label={`Testimonial ${i + 1}`}
            >
              <CommentCard text={comment.text} />
            </SwiperSlide>
          ))}

          {/* Custom navigation buttons */}
          <button
            ref={prevRef}
            className={`${styles.customNavButton} ${styles.prevButton}`}
            aria-label="Previous testimonial"
            type="button"
          >
            <FaChevronLeft />
          </button>
          <button
            ref={nextRef}
            className={`${styles.customNavButton} ${styles.nextButton}`}
            aria-label="Next testimonial"
            type="button"
          >
            <FaChevronRight />
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default PeopleSaySection;
