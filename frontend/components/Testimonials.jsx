import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content:
        "The school has provided an exceptional learning environment for my daughter. The teachers are caring and dedicated.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael Chen",
      role: "Alumni",
      content:
        "The education I received here prepared me well for university and my career. Forever grateful for the foundation.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    },
    {
      name: "Emily Davis",
      role: "Current Student",
      content:
        "I love the supportive community here. The teachers help us reach our potential and pursue our passions.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    },
    {
      name: "Sarah Johnson",
      role: "Parent",
      content:
        "The school has provided an exceptional learning environment for my daughter. The teachers are caring and dedicated.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael Chen",
      role: "Alumni",
      content:
        "The education I received here prepared me well for university and my career. Forever grateful for the foundation.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    },
    {
      name: "Emily Davis",
      role: "Current Student",
      content:
        "I love the supportive community here. The teachers help us reach our potential and pursue our passions.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    },
    {
      name: "Sarah Johnson",
      role: "Parent",
      content:
        "The school has provided an exceptional learning environment for my daughter. The teachers are caring and dedicated.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael Chen",
      role: "Alumni",
      content:
        "The education I received here prepared me well for university and my career. Forever grateful for the foundation.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    },
    {
      name: "Emily Davis",
      role: "Current Student",
      content:
        "I love the supportive community here. The teachers help us reach our potential and pursue our passions.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from our parents, students, and alumni.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ el: '.custom-swiper-pagination', clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between">
                <p className="text-gray-700 text-base mb-6 italic leading-relaxed">
                  “{testimonial.content}”
                </p>
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    onError={(e) => (e.target.src = '/placeholder.svg')}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-indigo-100"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots Below Swiper */}
        <div className="custom-swiper-pagination mt-8 text-center"></div>
      </div>
    </section>
  );
};

export default Testimonials;
